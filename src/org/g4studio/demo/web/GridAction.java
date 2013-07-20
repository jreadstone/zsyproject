package org.g4studio.demo.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.g4studio.core.json.JsonHelper;
import org.g4studio.core.metatype.Dto;
import org.g4studio.core.metatype.impl.BaseDto;
import org.g4studio.core.mvc.xstruts.action.ActionForm;
import org.g4studio.core.mvc.xstruts.action.ActionForward;
import org.g4studio.core.mvc.xstruts.action.ActionMapping;
import org.g4studio.core.util.G4Constants;
import org.g4studio.core.util.G4Utils;
import org.g4studio.core.web.BizAction;
import org.g4studio.core.web.CommonActionForm;

/**
 * 表格标准范例暨教程Action
 * 
 * @author XiongChun
 * @since 2010-10-23
 * @see BizAction
 */
public class GridAction extends BizAction {

	/**
	 * 表格演示一页面初始化
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward gridDemo1Init(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		return mapping.findForward("gridDemo1View");
	}
	
	/**
	 * 表格演示二页面初始化
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward gridDemo2Init(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("gridDemo2View");
	}
	
	/**
	 * 表格演示三页面初始化
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward gridDemo3Init(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("gridDemo3View");
	}
	
	/**
	 * 表格演示四页面初始化
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward gridDemo4Init(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("gridDemo4View");
	}
	
	/**
	 * 表格演示五页面初始化
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward gridDemo5Init(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("gridDemo5View");
	}
	
	/**
	 * 表格演示六页面初始化
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward gridDemo6Init(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		super.removeSessionAttribute(request, "GRIDACTION_QUERYBALANCEINFO_DTO");
		return mapping.findForward("gridDemo6View");
	}
	
	/**
	 * 表格演示七页面初始化
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward gridDemo7Init(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("gridDemo7View");
	}

	/**
	 * 查询医院收费项目数据
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward querySfxmDatas(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		CommonActionForm aForm = (CommonActionForm) form;
		Dto dto = aForm.getParamAsDto(request);
		List list = g4Reader.queryForPage("Demo.queryCatalogsForGridDemo", dto);
		Integer countInteger = (Integer) g4Reader.queryForObject("Demo.countCatalogsForGridDemo", dto);
		String jsonString = JsonHelper.encodeList2PageJson(list, countInteger, G4Constants.FORMAT_Date);
		super.write(jsonString, response);
		return mapping.findForward(null);
	}
	
	/**
	 * 查询医院结算数据
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward queryBalanceInfo(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		CommonActionForm aForm = (CommonActionForm) form;
		Dto dto = aForm.getParamAsDto(request);
		List list = g4Reader.queryForPage("Demo.queryBalanceInfo", dto);
		Integer countInteger = (Integer) g4Reader.queryForObject("Demo.countBalanceInfo", dto);
		super.setSessionAttribute(request, "GRIDACTION_QUERYBALANCEINFO_DTO", dto);
		String jsonString = encodeList2PageJson(list, countInteger, G4Constants.FORMAT_Date);
		super.write(jsonString, response);
		return mapping.findForward(null);
	}
	
	/**
	 * 汇总医院结算数据
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward sumBalanceInfo(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		Dto dto = (BaseDto)super.getSessionAttribute(request, "GRIDACTION_QUERYBALANCEINFO_DTO");
		Dto sumDto = sumDto = (BaseDto)g4Reader.queryForObject("Demo.sumBalanceInfo", dto);
		if (G4Utils.isNotEmpty(sumDto)) {
			sumDto.put("sxh", "共" + sumDto.getAsString("sxh") + "人次");
		}
		sumDto.put("success", new Boolean(true));
		String jsonString = JsonHelper.encodeObject2Json(sumDto);
		super.write(jsonString, response);
		return mapping.findForward(null);
	}
	
	/**
	 * 保存表格脏数据
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward saveDirtyDatas(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		CommonActionForm aForm = (CommonActionForm) form;
		List list  = aForm.getGridDirtyData(request);
		for (int i = 0; i < list.size(); i++) {
			Dto dto = (BaseDto)list.get(i);
			System.out.println("脏数据:\n" + dto);
			//todo anything what u want
		}
		Dto outDto = new BaseDto();
		outDto.put("success", new Boolean(true));
		outDto.put("msg", "数据已提交到后台,但演示程序没有将其持久化到数据库.<br>" + request.getParameter("dirtydata"));
		super.write(outDto.toJson(), response);
		return mapping.findForward(null);
	}
	
	/**
	 * 待办事项页面初始化
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward dbsxInit(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("dbsxView");
	}
	
	/**
	 * 待办事项测试用例
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward querydbsxDatas(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String jsonString ="{TOTALCOUNT:5,ROOT:[{'sxmc':'总经办关于一季度销售任务的汇报通知','lb':'工作安排','fsr':'总经办用户','nr':'请各销售部门汇总统计一季度销售任务的完成情况，并报送总经办。','fsrq':'2013-05-27','jjcd':'一般','sfyd':'未读'}"+
				",{'sxmc':'加管科关于售油机升级事项（请求协助）','lb':'工作安排','fsr':'总经办用户','nr':'由于各油站售油机软件版本太老，需进行升级，请信息中心予以协助配合。','fsrq':'2013-05-27','jjcd':'一般','sfyd':'未读'}"+
				",{'sxmc':'总经办关于明天举行周例会的通知','lb':'公司通知','fsr':'总经办用户','nr':'总经办关于明天上午10点在5楼会议室举行公司周例会的通知','fsrq':'2013-05-25','jjcd':'紧急','sfyd':'已读'}"+
				",{'sxmc':'非油部门关于市场需求的调研事项（专题工作）','lb':'专题工作','fsr':'张三（非油部）','nr':'非油业务的产品选型工作，请各部门务必配合进行市场调研工作。','fsrq':'2013-05-25','jjcd':'一般','sfyd':'已读'}"+
				",{'sxmc':'关于5月25日汽柴油调价通知','lb':'通知信息','fsr':'总经办用户','nr':'国家发改委计划从5月25日零时起调整汽柴油价格，请各部门务必做好准备。','fsrq':'2013-05-24','jjcd':'紧急','sfyd':'已读'}]}";
		super.write(jsonString, response);
		return mapping.findForward(null);
	}
	
	/**
	 * 销售信息测试用例
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward queryxsxxDatas(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String jsonString ="{TOTALCOUNT:5,ROOT:[{'dwmc':'全公司','bnlsjhl':'495900','zsylsl':'148763','zbrywclsjhl':'182630','zbrsjlsl':'164051','wcl':'90%','cql':'-18578.73'}"+
				",{'dwmc':'长运司','bnlsjhl':'51000','zsylsl':'17626','zbrywclsjhl':'18782','zbrsjlsl':'18594','wcl':'99%','cql':'-187.80'}"+
				",{'dwmc':'成运司','bnlsjhl':'15500','zsylsl':'5407','zbrywclsjhl':'5708','zbrsjlsl':'6231','wcl':'109%','cql':'522.47'}"+
				",{'dwmc':'公交能源','bnlsjhl':'5800','zsylsl':'4440','zbrywclsjhl':'2136','zbrsjlsl':'5085','wcl':'238%','cql':'2948.80'}"+
				",{'dwmc':'兴光华能源','bnlsjhl':'3250','zsylsl':'','zbrywclsjhl':'1197','zbrsjlsl':'0','wcl':'0%','cql':'-1196.91'}" + 
				",{'dwmc':'锦龙片区','bnlsjhl':'107250','zsylsl':'32891','zbrywclsjhl':'39498','zbrsjlsl':'36386','wcl':'92%','cql':'-3112'}"+
				",{'dwmc':'花  果','bnlsjhl':'6700','zsylsl':'1524','zbrywclsjhl':'2467','zbrsjlsl':'1700','wcl':'69%','cql':'-767.39'}"+
				",{'dwmc':'望  江','bnlsjhl':'9800','zsylsl':'2715','zbrywclsjhl':'3609','zbrsjlsl':'3047','wcl':'84%','cql':'-562.05'}"+
				",{'dwmc':'海地通','bnlsjhl':'3200','zsylsl':'1090','zbrywclsjhl':'1178','zbrsjlsl':'1210','wcl':'103%','cql':'31.55'}"+
				",{'dwmc':'琉  璃','bnlsjhl':'2100','zsylsl':'459','zbrywclsjhl':'773','zbrsjlsl':'459','wcl':'59%','cql':'-313.98'}]}" ;
		super.write(jsonString, response);
		return mapping.findForward(null);
	}
	public ActionForward querybwlDatas(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String jsonString ="{TOTALCOUNT:10,ROOT:[{'bwlmc':'工作备忘','bwlnr':'关于各部门的下周的工作安排','bwsj':'2013-05-27'}"+
		",{'bwlmc':'统计备忘','bwlnr':'统计各片区加油站消费情况','bwsj':'2013-05-26'}"+
		",{'bwlmc':'通知备忘','bwlnr':'总经办关于明天上午10点在5楼会议室举行公司周例会的通知','bwsj':'2013-05-25'}"+
		",{'bwlmc':'通知备忘','bwlnr':'国家发改委计划从5月25日零时起调整汽柴油价格','bwsj':'2013-05-27'}"+
		",{'bwlmc':'通知备忘','bwlnr':'总经办关于一季度销售任务的汇报通知','bwsj':'2013-05-24'}"+
		",{'bwlmc':'工作备忘','bwlnr':'总经办关于明天上午10点在5楼会议室举行公司周例会','bwsj':'2013-05-25'}"+
		",{'bwlmc':'工作备忘','bwlnr':'非油部门关于市场需求的调研事项（专题工作）','bwsj':'2013-05-25'}"+
		",{'bwlmc':'工作备忘','bwlnr':'加管科关于售油机升级事项（请求协助）','bwsj':'2013-05-26'}"+
		",{'bwlmc':'通知备忘','bwlnr':'关于系统维护定于下周一9:00进行的通知','bwsj':'2013-05-27'}"+
		",{'bwlmc':'工作备忘','bwlnr':'关于各部门的工作汇报','bwsj':'2013-05-27'}]}";
		super.write(jsonString, response);
		return mapping.findForward(null);
	}
}
