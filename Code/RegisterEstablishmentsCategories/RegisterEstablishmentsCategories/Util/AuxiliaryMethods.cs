using DataAccess;
using System.Configuration;
using System.Web;

namespace UserInterface.Util
{
    public class AuxiliaryMethods
    {
        public static Context ContextPerRequestInstance
        {
            get
            {
                if (HttpContext.Current.Items[Utilities.ApplicationConstants.HC_CBLEC_CONTEXT_INSTANCE] == null)
                {
                    var context = new Context(ConfigurationManager.AppSettings["ENVIROMENT_DEV"].ToString());
                    context.Configuration.LazyLoadingEnabled = false;
                    context.Configuration.ProxyCreationEnabled = false;
                    HttpContext.Current.Items.Add(Utilities.ApplicationConstants.HC_CBLEC_CONTEXT_INSTANCE, context);
                }

//#if DEBUG
//                ((Context)HttpContext.Current.Items[Utilities.ApplicationConstants.HC_CBLEC_CONTEXT_INSTANCE]).Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
//#endif

                return (Context)HttpContext.Current.Items[Utilities.ApplicationConstants.HC_CBLEC_CONTEXT_INSTANCE];
            }
        }
    }
}