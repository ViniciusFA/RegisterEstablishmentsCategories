using System.Web;
using System.Web.Optimization;

namespace RegisterEstablishmentsCategories
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        //"~/Scripts/jquery-3.3.1.js",
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-{version}.min.js",
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-{version}.min.js",
                        //"~/Scripts/jquery.ui/jquery-ui.js",
                        "~/Scripts/jquery.mask.js",                        
                        "~/Scripts/jquery.unobtrusive-ajax.min.js",
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/DataTables/jquery.dataTables.js",
                        "~/Scripts/DataTables/dataTables.bootstrap.js",
                        "~/Scripts/DataTables/dataTables.fixedColumns.js",
                        "~/Scripts/Moment.js",
                        "~/Scripts/bootbox.min.js",                      
                        "~/Scripts/EstablishmentAlerts.js",
                        "~/Scripts/Moment.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/script").Include(
                      "~/Scripts/EstablishmentMain.js"));

            // "~/Scripts/ECMain.js",

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Bootstrap/bootstrap.css",
                       "~/Content/Bootstrap/bootstrap.css",
                      "~/Content/Login/Login.css",
                      "~/Content/Menu/Menu.css",
                      "~/Content/Site/Site.css"));
        }
    }
}
