using ReportApp.DAL;
using ReportApp.Services.Interfaces;
using System.Collections.Generic;
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

        public async Task<int> GetServiceRequestDefaultWeek() => (int)await dataAccess.ExecuteScalar("GetServiceRequestDefaultWeek", null);

        public async Task<IEnumerable<dynamic>> GetServiceRequestListofGTIN_NotReceived() => await dataAccess.Execute("GetServiceRequestListofGTIN_NotReceived", null);

        public async Task<IEnumerable<dynamic>> GetServiceRequestCurrentWeeks() => await dataAccess.Execute("GetServiceRequestCurrentWeeks", null);
        
    }
}
