using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace ReportApp.DAL
{
    public interface IDataAccess
    {
        Task<int> ExecuteNonQuery(string procedureName, List<SqlParameter> parameters, CommandType commandType = CommandType.StoredProcedure);
        Task<object> ExecuteScalar(string procedureName, List<SqlParameter> parameters);
        Task<IEnumerable<dynamic>> Execute(string procedureName, List<SqlParameter> parameters, CommandType commandType = CommandType.StoredProcedure);
    }
}
