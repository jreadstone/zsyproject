package org.g4studio.test.junit;
import java.io.UnsupportedEncodingException;

import org.activiti.editor.constants.ModelDataJsonConstants;
import org.activiti.engine.FormService;
import org.activiti.engine.HistoryService;
import org.activiti.engine.IdentityService;
import org.activiti.engine.ManagementService;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.repository.Model;
import org.apache.commons.lang.StringUtils;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ObjectNode;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration(locations = { "/global.config.xml" })
public class ProcessCreateTest extends SpringTransactionalTestCase{
	
	@Autowired
	private RepositoryService repositoryService;

	@Autowired
	private RuntimeService runtimeService;

	@Autowired
	private FormService formService;

	@Autowired
	private IdentityService identityService;

	@Autowired
	private TaskService taskService;

	@Autowired
	private HistoryService historyService;

	@Autowired
	private ManagementService managementService;
	
	@Test
	public void test() throws UnsupportedEncodingException {
		String description = "请假流程描述";
		String name = "请假流程";
		String key = "level";
		 ObjectMapper objectMapper = new ObjectMapper();
	      ObjectNode editorNode = objectMapper.createObjectNode();
	      editorNode.put("id", "canvas");
	      editorNode.put("resourceId", "canvas");
	      ObjectNode stencilSetNode = objectMapper.createObjectNode();
	      stencilSetNode.put("namespace", "http://b3mn.org/stencilset/bpmn2.0#");
	      editorNode.put("stencilset", stencilSetNode);
	      Model modelData = repositoryService.newModel();

	      ObjectNode modelObjectNode = objectMapper.createObjectNode();
	      modelObjectNode.put(ModelDataJsonConstants.MODEL_NAME, name);
	      modelObjectNode.put(ModelDataJsonConstants.MODEL_REVISION, 1);
	      description = StringUtils.defaultString(description);
	      modelObjectNode.put(ModelDataJsonConstants.MODEL_DESCRIPTION, description);
	      modelData.setMetaInfo(modelObjectNode.toString());
	      modelData.setName(name);
	      modelData.setKey(StringUtils.defaultString(key));

	      repositoryService.saveModel(modelData);
	      repositoryService.addModelEditorSource(modelData.getId(), editorNode.toString().getBytes("utf-8"));
	}
}

