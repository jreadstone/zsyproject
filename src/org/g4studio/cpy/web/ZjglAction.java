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

public class ZjglAction extends BizAction {
	public ActionForward queryZjglInit(ActionMapping mapping,ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("queryZjglView");
	}
	public ActionForward queryzjDatas(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		CommonActionForm cForm = (CommonActionForm) form;
		Dto inDto = cForm.getParamAsDto(request);
		String jsonString ="{TOTALCOUNT:5,ROOT:[{'zjzh':'川安经(甲)字[2011]003416','jydwmc':'中国石油天然气股份有限公司四川销售成品油分公司','fzr':'杨保平','dwlx':'股份有限公司','yycs':'成都市青羊区鼓楼北二街24号','yyfw':'汽油、柴油','zzlx':'危险化学品经营许可证','fzjg':'四川省安全生产监督管理局'}"+
		",{'zjzh':'油零售证书第A0709号','jydwmc':'中国石油天然气股份有限公司四川销售成品油分公司柳江加油站','fzr':'杨保平','dwlx':'股份有限公司','yycs':'外东包江桥村四组','yyfw':'','zzlx':'成品油零售经营批准证书','fzjg':'四川经济和信息化委员会'}"+
		",{'zjzh':'1510011202007109','jydwmc':'中国石油天然气股份有限公司四川销售成品油分公司龙泉开发区加油站','fzr':'付强','dwlx':'股份有限公司','yycs':'四川省成都市龙泉驿区龙泉街办保安村六组','yyfw':'卷烟、雪茄烟','zzlx':'烟草专卖证','fzjg':'龙泉驿区烟草专卖局'}"+
		",{'zjzh':'510000000063911','jydwmc':'中国石油天然气股份有限公司四川销售成品油分公司','fzr':'付强','dwlx':'股份有限公司','yycs':'成都市青羊区鼓楼北二街24号','yyfw':'成品油经营;预包装食品零售;卷烟、雪茄烟零售;商品批发与零售','zzlz':'工商营业执照','fzjg':'四川省工商行政管理局'}"+
		",{'zjzh':'90180142-X','jydwmc':'中国石油天然气股份有限公司四川销售成品油分公司','fzr':'付强','dwlx':'股份有限公司','yycs':'四川省成都市青羊区鼓楼北二街24号','yyfw':'','zzlx':'组织机构代码证','fzjg':'四川省质量技术监督局'}]}";		
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
}
