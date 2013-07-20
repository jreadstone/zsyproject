package org.g4studio.cpy.web;

import java.text.SimpleDateFormat;
import java.util.Date;
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
import org.g4studio.core.web.BizAction;
import org.g4studio.core.web.CommonActionForm;
import org.g4studio.system.common.util.SystemConstants;

public class SjbsAction extends BizAction {
	public ActionForward sjbsInit(ActionMapping mapping,ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("sjbsView");
	}
	public ActionForward querySjbsDatas(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		CommonActionForm cForm = (CommonActionForm) form;
		Dto inDto = cForm.getParamAsDto(request);
		String jsonString ="{TOTALCOUNT:16,ROOT:[{'slzj':'四川销售成品油分公司安靖加油站','bjmbskjy':1322.88,'bjmwskjy':528.3,'bjmsjzje':1851.18,'ptcdbskjy':146234.28,'ptcdwskjy':89.57,'ptcdsjzje':146323.85,'ptgrbskjy':150874.62,'ptgrwskjy':169.97,'ptgrsjzje':151044.59"+
				",'hzbskjy':298431.78,'hzwskjy':787.84,'hzsjzje':299219.62}"+
		",{'slzj':'四川销售成品油分公司八一加油站','bjmbskjy':0,'bjmwskjy':0,'bjmsjzje':0,'ptcdbskjy':196917.35,'ptcdwskjy':677.28,'ptcdsjzje':197594.63,'ptgrbskjy':58205.45,'ptgrwskjy':1200,'ptgrsjzje':59405.45"+
				",'hzbskjy':255122.8,'hzwskjy':1877.28,'hzsjzje':257000.08}" +
				",{'slzj':'四川销售成品油分公司保和加油站','bjmbskjy':1970.39,'bjmwskjy':300.93,'bjmsjzje':2271.32,'ptcdbskjy':98026.58,'ptcdwskjy':9735.49,'ptcdsjzje':107762.07,'ptgrbskjy':74254.64,'ptgrwskjy':2239.98,'ptgrsjzje':76494.62"+
					",'hzbskjy':174251.61,'hzwskjy':12276.4,'hzsjzje':186528.01}"+
					",{'slzj':'四川销售成品油分公司长久加油站','bjmbskjy':4733.82,'bjmwskjy':1454.56,'bjmsjzje':6188.38,'ptcdbskjy':104777.49,'ptcdwskjy':2823.48,'ptcdsjzje':107600.97,'ptgrbskjy':128558.16,'ptgrwskjy':2892.5,'ptgrsjzje':131450.66"+
						",'hzbskjy':238069.47,'hzwskjy':7170.54,'hzsjzje':245240.01}"+
					",{'slzj':'四川销售成品油分公司长运司城北加油站','bjmbskjy':1767.41,'bjmwskjy':1666.06,'bjmsjzje':3433.47,'ptcdbskjy':87485.81,'ptcdwskjy':2251.2,'ptcdsjzje':89737.01,'ptgrbskjy':40986.53,'ptgrwskjy':2585.57,'ptgrsjzje':25830.84"+
						",'hzbskjy':105677.52,'hzwskjy':7116.2,'hzsjzje':112793.72}"+
					",{'slzj':'四川销售成品油分公司城北加油站','bjmbskjy':11792.79,'bjmwskjy':1049.98,'bjmsjzje':12842.77,'ptcdbskjy':329642.83,'ptcdwskjy':5378.84,'ptcdsjzje':335021.67,'ptgrbskjy':112581.71,'ptgrwskjy':2280.22,'ptgrsjzje':114861.93"+
						",'hzbskjy':454017.33,'hzwskjy':8709.04,'hzsjzje':462726.37}"+
					",{'slzj':'四川销售成品油分公司城南加油站','bjmbskjy':19477.13,'bjmwskjy':2805.05,'bjmsjzje':22282.18,'ptcdbskjy':397630.14,'ptcdwskjy':3140.1,'ptcdsjzje':400770.24,'ptgrbskjy':64506.98,'ptgrwskjy':5881.27,'ptgrsjzje':70388.25"+
						",'hzbskjy':481614.25,'hzwskjy':11826.42,'hzsjzje':493440.67}"+
					",{'slzj':'四川销售成品油分公司成华加油站','bjmbskjy':649.96,'bjmwskjy':0,'bjmsjzje':649.96,'ptcdbskjy':82893.62,'ptcdwskjy':0,'ptcdsjzje':82893.62,'ptgrbskjy':90637.63,'ptgrwskjy':0,'ptgrsjzje':90637.63"+
						",'hzbskjy':174181.21,'hzwskjy':0,'hzsjzje':174181.21}"+
					",{'slzj':'四川销售成品油分公司成运司城南加油站','bjmbskjy':18551.18,'bjmwskjy':7228.98,'bjmsjzje':25780.16,'ptcdbskjy':483860.08,'ptcdwskjy':3854.57,'ptcdsjzje':487714.65,'ptgrbskjy':52062.59,'ptgrwskjy':1303.27,'ptgrsjzje':53365.86"+
						",'hzbskjy':554473.85,'hzwskjy':12386.82,'hzsjzje':566860.67}"+
					",{'slzj':'四川销售成品油分公司簇桥加油站','bjmbskjy':530.04,'bjmwskjy':200,'bjmsjzje':730.04,'ptcdbskjy':11286.39,'ptcdwskjy':0,'ptcdsjzje':11286.39,'ptgrbskjy':106853.86,'ptgrwskjy':244.24,'ptgrsjzje':107098.1"+
						",'hzbskjy':118670.29,'hzwskjy':444.24,'hzsjzje':119114.53}"+
					",{'slzj':'四川销售成品油分公司二环加油站','bjmbskjy':1031.82,'bjmwskjy':1780.03,'bjmsjzje':2811.85,'ptcdbskjy':98624.13,'ptcdwskjy':2199.1,'ptcdsjzje':100823.23,'ptgrbskjy':11698.92,'ptgrwskjy':0,'ptgrsjzje':11698.92"+
						",'hzbskjy':111354.87,'hzwskjy':3979.13,'hzsjzje':115334}"+
					",{'slzj':'四川销售成品油分公司二仙桥加油站','bjmbskjy':978.94,'bjmwskjy':0,'bjmsjzje':978.94,'ptcdbskjy':62958.3,'ptcdwskjy':2198.01,'ptcdsjzje':65156.31,'ptgrbskjy':46786.75,'ptgrwskjy':0,'ptgrsjzje':46786.75"+
						",'hzbskjy':110723.99,'hzwskjy':2198.01,'hzsjzje':112922}"+
					",{'slzj':'四川销售成品油分公司高新天山加油站','bjmbskjy':26462.52,'bjmwskjy':5438.74,'bjmsjzje':31901.26,'ptcdbskjy':461977.17,'ptcdwskjy':6369.32,'ptcdsjzje':468346.49,'ptgrbskjy':143988.2,'ptgrwskjy':5821.87,'ptgrsjzje':149810.07"+
						",'hzbskjy':632427.89,'hzwskjy':17629.93,'hzsjzje':650057.82}"+
					",{'slzj':'四川销售成品油分公司古城加油站','bjmbskjy':300,'bjmwskjy':0,'bjmsjzje':300,'ptcdbskjy':20934.43,'ptcdwskjy':0,'ptcdsjzje':20934.43,'ptgrbskjy':80743.17,'ptgrwskjy':0,'ptgrsjzje':80743.17"+
						",'hzbskjy':101977.6,'hzwskjy':0,'hzsjzje':101977.6}"+
					",{'slzj':'四川销售成品油分公司海地通加油站','bjmbskjy':6055.61,'bjmwskjy':2381.71,'bjmsjzje':8437.32,'ptcdbskjy':130715.91,'ptcdwskjy':4899.54,'ptcdsjzje':135615.45,'ptgrbskjy':40970.66,'ptgrwskjy':1999,'ptgrsjzje':42969.66"+
						",'hzbskjy':177742.18,'hzwskjy':9280.25,'hzsjzje':187022.43}"+
					",{'slzj':'四川销售成品油分公司花果加油站','bjmbskjy':5506.68,'bjmwskjy':2533.81,'bjmsjzje':8040.49,'ptcdbskjy':150136.72,'ptcdwskjy':1698.17,'ptcdsjzje':151834.89,'ptgrbskjy':37692.69,'ptgrwskjy':1798.14,'ptgrsjzje':39490.83"+
						",'hzbskjy':193336.09,'hzwskjy':6030.12,'hzsjzje':199366.21}]}";		
		write(jsonString, response);
		return mapping.findForward(null);
	}
	public ActionForward saveZz(ActionMapping mapping,ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		setOkTipMsg("数据保存成功", response);
		return mapping.findForward(null);
	}
	public ActionForward updateZz(ActionMapping mapping,ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		setOkTipMsg("数据修改成功", response);
		return mapping.findForward(null);
	}
	public ActionForward deleteZz(ActionMapping mapping,ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		setOkTipMsg("数据删除成功", response);
		return mapping.findForward(null);
	}
	public ActionForward departmentTreeInit(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		Dto dto = new BaseDto();
		String nodeid = request.getParameter("node");
		dto.put("parentid", nodeid);
		List deptList = g4Reader.queryForList("Demo.queryDeptItemsByDto4TreeGridDemo", dto);
		Dto deptDto = new BaseDto();
		for(int i = 0; i < deptList.size(); i++){
			deptDto = (BaseDto)deptList.get(i);
			if(deptDto.getAsString("leaf").equals(SystemConstants.LEAF_Y))
				deptDto.put("leaf", new Boolean(true));
			else
				deptDto.put("leaf", new Boolean(false));
			if(deptDto.getAsString("id").length() == 6)
				deptDto.put("expanded", new Boolean(true));
		}
		String jsonString = JsonHelper.encodeObject2Json(deptList);
		super.write(jsonString, response);
		return mapping.findForward(null);
	}
	public ActionForward sumBalanceInfo(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		CommonActionForm cForm = (CommonActionForm) form;
		Dto inDto = cForm.getParamAsDto(request);
		String jsonString ="{'success':true,'slzj':'合计','hzbskjy':19925215.65,'hzwskjy':712358.27,'hzsjzje':20637573.92}";		
		write(jsonString, response);
		return mapping.findForward(null);
	}
}
