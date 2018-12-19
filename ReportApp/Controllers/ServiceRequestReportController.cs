using Microsoft.AspNetCore.Mvc;
using ReportApp.Services.Interfaces;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace ReportApp.Controllers
{
    [Produces("application/json")]
    [Route("api/ServiceRequestReport")]
    public class ServiceRequestReportController : Controller
    {

        //private ServiceRequestContext context;
        private IServiceRequestService serviceRequestService;

        public ServiceRequestReportController(IServiceRequestService _serviceRequestService) => 
            serviceRequestService = _serviceRequestService;

        // GET: api/ServiceRequestReport/GetServiceRequestCurrentWeeks
        [HttpGet("GetServiceRequestCurrentWeeks", Name = "GetServiceRequestCurrentWeeks")]
        public async Task<IEnumerable<dynamic>> GetServiceRequestWeekly() =>
            await serviceRequestService.ExecuteStoredProcedure("GetServiceRequestCurrentWeeks", null);

        // GET: api/ServiceRequestReport/GetServiceRequestDefaultWeek
        [HttpGet("GetServiceRequestDefaultWeek", Name = "GetServiceRequestDefaultWeek")]
        public async Task<int> GetServiceRequestDefaultWeek() =>
            (int)await serviceRequestService.ExecuteScaler("GetServiceRequestDefaultWeek", null);

        // GET: api/ServiceRequestReport/GetServiceRequestListofGTIN_NotReceived
        [HttpGet("GetServiceRequestListofGTIN_NotReceived", Name = "GetServiceRequestListofGTIN_NotReceived")]
        public async Task<IEnumerable<dynamic>> GetServiceRequestListofGTIN_NotReceived() => 
            await serviceRequestService.ExecuteStoredProcedure("GetServiceRequestListofGTIN_NotReceived", null);

        // GET: api/ServiceRequestReport/SR_ScheduledServiceRequests
        [HttpGet("SR_ScheduledServiceRequests/{startWeekId}/{endWeekId}/{receivedId}/{resultId}", Name = "SR_ScheduledServiceRequests")]
        public async Task<IEnumerable<dynamic>> SR_ScheduledServiceRequests(int startWeekId, int endWeekId, int receivedId, int resultId) => 
            await serviceRequestService.ExecuteStoredProcedure("SR_ScheduledServiceRequests",new List<SqlParameter>
            {
                new SqlParameter("@StartWeekId",startWeekId),
                new SqlParameter("@EndWeekSchedId",endWeekId),
                new SqlParameter("@Received",receivedId),
                new SqlParameter("@Result",resultId)
            });

        // GET: api/ServiceRequestReport/SR_ScheduledReportWeeklyByGtin
        [HttpGet("SR_ScheduledReportWeeklyByGtin/{startWeekId}/{endWeekId}/{isExternalId}", Name = "SR_ScheduledReportWeeklyByGtin")]
        public async Task<IEnumerable<dynamic>> SR_ScheduledReportWeeklyByGtin(int startWeekId, int endWeekId, int isExternalId) =>
            await serviceRequestService.ExecuteStoredProcedure("SR_ScheduledReportWeeklyByGtin", new List<SqlParameter>
            {
                new SqlParameter("@StartWeekSchId",startWeekId),
                new SqlParameter("@EndWeekSchId",endWeekId),
                new SqlParameter("@IsExternal",isExternalId)
            });

        // GET: api/ServiceRequestReport/SR_ScheduledReportListGtin
        [HttpGet("SR_ScheduledReportListGtin/{startWeekId}/{endWeekId}/{isExternalId}/{incidentId}", Name = "SR_ScheduledReportListGtin")]
        public async Task<IEnumerable<dynamic>> SR_ScheduledReportListGtin(int startWeekId, int endWeekId, int isExternalId, int incidentId) =>
            await serviceRequestService.ExecuteStoredProcedure("SR_ScheduledReportListGtin", new List<SqlParameter>
            {
                new SqlParameter("@StartWeekSchId",startWeekId),
                new SqlParameter("@EndWeekSchId",endWeekId),
                new SqlParameter("@IsExternal",isExternalId),
                new SqlParameter("@Incident",incidentId)
            });
    }
}
