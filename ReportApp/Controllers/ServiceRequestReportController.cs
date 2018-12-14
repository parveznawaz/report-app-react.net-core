using Microsoft.AspNetCore.Mvc;
using ReportApp.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReportApp.Controllers
{
    [Produces("application/json")]
    [Route("api/ServiceRequestReport")]
    public class ServiceRequestReportController : Controller
    {

        //private ServiceRequestContext context;
        private IServiceRequestService serviceRequestService;

        public ServiceRequestReportController(IServiceRequestService _serviceRequestService) => serviceRequestService = _serviceRequestService;

        // GET: api/ServiceRequestReport/GetServiceRequestCurrentWeeks
        [HttpGet("GetServiceRequestCurrentWeeks", Name = "GetServiceRequestCurrentWeeks")]
        public async Task<IEnumerable<dynamic>> GetServiceRequestWeekly() => await serviceRequestService.GetServiceRequestCurrentWeeks();

        // GET: api/ServiceRequestReport/GetServiceRequestDefaultWeek
        [HttpGet("GetServiceRequestDefaultWeek", Name = "GetServiceRequestDefaultWeek")]
        public async Task<int> GetServiceRequestDefaultWeek() => await serviceRequestService.GetServiceRequestDefaultWeek();

        // GET: api/ServiceRequestReport/GetServiceRequestListofGTIN_NotReceived
        [HttpGet("GetServiceRequestListofGTIN_NotReceived", Name = "GetServiceRequestListofGTIN_NotReceived")]
        public async Task<IEnumerable<dynamic>> GetServiceRequestListofGTIN_NotReceived() => await serviceRequestService.GetServiceRequestListofGTIN_NotReceived();

    }
}
