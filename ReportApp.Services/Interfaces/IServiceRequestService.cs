
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace ReportApp.Services.Interfaces
{
    public interface IServiceRequestService
    {
        Task<object> ExecuteScaler(string StoredProcuedureName, List<SqlParameter> parameters);
        Task<IEnumerable<dynamic>> ExecuteStoredProcedure(string StoredProcedureName, List<SqlParameter> parameters);
    }
}