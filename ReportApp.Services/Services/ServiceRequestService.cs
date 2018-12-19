using ReportApp.DAL;
using ReportApp.Services.Interfaces;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace ReportApp.Services.Services
{
    public class ServiceRequestService : IServiceRequestService
    {

        private IDataAccess dataAccess;
        public ServiceRequestService(IDataAccess _dataAccess)
        {
            dataAccess = _dataAccess;
        }        

        public async Task<object> ExecuteScaler(string StoredProcuedureName, List<SqlParameter> parameters) => await dataAccess.ExecuteScalar(StoredProcuedureName, parameters);
        public async Task<IEnumerable<dynamic>> ExecuteStoredProcedure(string StoredProcedureName, List<SqlParameter> parameters) => await dataAccess.Execute(StoredProcedureName, parameters);
    }
}
