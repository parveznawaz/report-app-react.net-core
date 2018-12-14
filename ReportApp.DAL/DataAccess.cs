using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReportApp.DAL
{
    public class DataAccess: IDataAccess
    {
        protected string ConnectionString { get; set; }

        public DataAccess(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private SqlConnection GetConnection()
        {
            SqlConnection connection = new SqlConnection(this.ConnectionString);
            if (connection.State != ConnectionState.Open)
                connection.Open();
            return connection;
        }

        protected DbCommand GetCommand(DbConnection connection, string commandText, CommandType commandType)
        {
            SqlCommand command = new SqlCommand(commandText, connection as SqlConnection);
            command.CommandType = commandType;
            return command;
        }

        protected SqlParameter GetParameter(string parameter, object value)
        {
            SqlParameter parameterObject = new SqlParameter(parameter, value != null ? value : DBNull.Value)
            {
                Direction = ParameterDirection.Input
            };
            return parameterObject;
        }

        //protected SqlParameter GetParameterOut(string parameter, SqlDbType type, object value = null, ParameterDirection parameterDirection = ParameterDirection.InputOutput)
        //{
        //    SqlParameter parameterObject = new SqlParameter(parameter, type); ;

        //    if (type == SqlDbType.NVarChar || type == SqlDbType.VarChar || type == SqlDbType.NText || type == SqlDbType.Text)
        //    {
        //        parameterObject.Size = -1;
        //    }

        //    parameterObject.Direction = parameterDirection;

        //    if (value != null)
        //    {
        //        parameterObject.Value = value;
        //    }
        //    else
        //    {
        //        parameterObject.Value = DBNull.Value;
        //    }

        //    return parameterObject;
        //}

        public async Task<int> ExecuteNonQuery(string procedureName, List<DbParameter> parameters, CommandType commandType = CommandType.StoredProcedure)
        {
            int returnValue = -1;

            try
            {
                using (SqlConnection connection = this.GetConnection())
                {
                    DbCommand cmd = this.GetCommand(connection, procedureName, commandType);

                    if (parameters != null && parameters.Count > 0)
                    {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }

                    returnValue = await cmd.ExecuteNonQueryAsync();
                }
            }
            catch (Exception ex)
            {
                //LogException("Failed to ExecuteNonQuery for " + procedureName, ex, parameters);
                throw;
            }

            return returnValue;
        }

        public async Task<object> ExecuteScalar(string procedureName, List<SqlParameter> parameters)
        {
            object returnValue = null;

            try
            {
                using (DbConnection connection = this.GetConnection())
                {
                    DbCommand cmd = this.GetCommand(connection, procedureName, CommandType.StoredProcedure);

                    if (parameters != null && parameters.Count > 0)
                    {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }

                    returnValue = await cmd.ExecuteScalarAsync();
                }
            }
            catch (Exception ex)
            {
                //LogException("Failed to ExecuteScalar for " + procedureName, ex, parameters);
                throw;
            }

            return returnValue;
        }

        public async Task<IEnumerable<dynamic>> Execute(string procedureName, List<DbParameter> parameters, CommandType commandType = CommandType.StoredProcedure)
        {
            try
            {
                DbConnection connection = this.GetConnection();
                {
                    DbCommand cmd = this.GetCommand(connection, procedureName, commandType);
                    if (parameters != null && parameters.Count > 0)
                    {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }

                    return ProcessDataReader(await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection));
                }
            }
            catch (Exception ex)
            {
                //LogException("Failed to GetDataReader for " + procedureName, ex, parameters);
                throw;
            }

            
        }

        private IEnumerable<dynamic> ProcessDataReader(DbDataReader reader)
        {
            var names = Enumerable.Range(0, reader.FieldCount).Select(reader.GetName).ToList();
            foreach (IDataRecord record in reader as IEnumerable)
            {
                var expando = new ExpandoObject() as IDictionary<string, object>;
                foreach (var name in names)
                    expando[name] = record[name];

                yield return expando;
            }
        }
   

    }
}
