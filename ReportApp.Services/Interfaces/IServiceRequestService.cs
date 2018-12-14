
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReportApp.Services.Interfaces
{
    public interface IServiceRequestService
    {
        Task<int> GetServiceRequestDefaultWeek();
        Task<IEnumerable<dynamic>> GetServiceRequestListofGTIN_NotReceived();
        Task<IEnumerable<dynamic>> GetServiceRequestCurrentWeeks();
    }
}