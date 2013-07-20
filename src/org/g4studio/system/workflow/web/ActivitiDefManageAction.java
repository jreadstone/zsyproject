package org.g4studio.system.workflow.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.g4studio.core.json.JsonHelper;
import org.g4studio.core.metatype.Dto;
import org.g4studio.core.mvc.xstruts.action.ActionForm;
import org.g4studio.core.mvc.xstruts.action.ActionForward;
import org.g4studio.core.mvc.xstruts.action.ActionMapping;
import org.g4studio.core.util.G4Constants;
import org.g4studio.core.web.BizAction;
import org.g4studio.core.web.CommonActionForm;

/**
 * <p>Title: ActivitiDefManageAction.java</p>
 * <p>Description: 流程模型定义</p>
 * <p></p>
 * <p>Copyright: Copyright (c) 2013</p>
 * @author 王昕怡
 * @version 1.0
 */
public class ActivitiDefManageAction extends BizAction {

	/**
	 * 流程模型定义管理页面初始化
	 * 
	 * @param
	 * @return
	 */
	public ActionForward init(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return mapping.findForward("activitiView");
	}
	
	public ActionForward qryprocessDefList(ActionMapping mapping, ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		CommonActionForm aForm = (CommonActionForm) form;
		Dto dto = aForm.getParamAsDto(request);
		List list = g4Reader.queryForPage("Activiti.qryprocessDefList", dto);
		Integer countInteger = (Integer) g4Reader.queryForObject("Activiti.countqryprocessDefList", dto);
		String jsonString = JsonHelper.encodeList2PageJson(list, countInteger, G4Constants.FORMAT_Date);
		super.write(jsonString, response);
		return mapping.findForward(null);
	}

}
