package org.g4studio.core.model.dao.impl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.g4studio.core.exception.PrcException;
import org.g4studio.core.metatype.Dto;
import org.g4studio.core.metatype.impl.BaseDto;
import org.g4studio.core.model.dao.Dao;
import org.g4studio.core.properties.PropertiesFactory;
import org.g4studio.core.properties.PropertiesFile;
import org.g4studio.core.properties.PropertiesHelper;
import org.g4studio.core.util.G4Constants;
import org.g4studio.core.util.G4Utils;
import org.mybatis.spring.support.SqlSessionDaoSupport;

/**
 * <p>Title: DaoImpl.java</p>
 * <p>Description:数据访问实现类(原生) 基于Spring对iBatis的支持机制实现,支持自定义的数据操作 </p>
 * <p>Copyright: Copyright (c) 2013</p>
 * @author 王昕怡
 * @version 1.0
 */
public class DaoImpl extends SqlSessionDaoSupport implements Dao{
	
	private static Log log = LogFactory.getLog(DaoImpl.class);

	/**
	 * 插入一条记录
	 * 
	 * @param SQL语句ID号
	 * @param parameterObject
	 *            要插入的对象(map javaBean)
	 */
	public void insert(String statementName, Object parameterObject) {
		getSqlSession().insert(statementName, parameterObject);
	}

	/**
	 * 插入一条记录
	 * 
	 * @param SQL语句ID号
	 */
	public void insert(String statementName) {
		getSqlSession().insert(statementName);
	}

	/**
	 * 查询一条记录
	 * 
	 * @param SQL语句ID号
	 * @param parameterObject
	 *            查询条件对象(map javaBean)
	 */
	public Object queryForObject(String statementName, Object parameterObject) {
		return getSqlSession().selectOne(statementName, parameterObject);
	}

	/**
	 * 查询一条记录
	 * 
	 * @param SQL语句ID号
	 */
	public Object queryForObject(String statementName) {
		return getSqlSession().selectOne(statementName, new BaseDto());
	}

	/**
	 * 查询记录集合
	 * 
	 * @param SQL语句ID号
	 * @param parameterObject
	 *            查询条件对象(map javaBean)
	 */
	public List queryForList(String statementName, Object parameterObject) {
		return getSqlSession().selectList(statementName, parameterObject);
	}

	/**
	 * 查询记录集合
	 * 
	 * @param SQL语句ID号
	 */
	public List queryForList(String statementName) {
		return getSqlSession().selectList(statementName, new BaseDto());
	}

	/**
	 * 按分页查询
	 * 
	 * @param SQL语句ID号
	 * @param parameterObject
	 *            查询条件对象(map javaBean)
	 * @throws SQLException
	 */
	public List queryForPage(String statementName, Dto qDto)
			throws SQLException {
		/*Connection connection = getConnection();
		String dbNameString = connection.getMetaData().getDatabaseProductName().toLowerCase();
		try {
			connection.close();
		} catch (Exception e) {
			log.error(G4Constants.Exception_Head + "未正常关闭数据库连接");
			e.printStackTrace();
		}*/
		String start = qDto.getAsString("start");
		String limit = qDto.getAsString("limit");
		int startInt = 0;
		if (G4Utils.isNotEmpty(start)) {
			startInt = Integer.parseInt(start);
			/*if (dbNameString.indexOf("ora") > -1) {
				qDto.put("start", startInt + 1);
			} else if (dbNameString.indexOf("mysql") > -1) {
				qDto.put("start", startInt);
			} else {
				qDto.put("start", startInt);
			}*/
			qDto.put("start", startInt + 1);
		}else {
			qDto.put("start", 0);
			log.warn("缺失分页起始参数,后台已经为你自动赋值，但建议您参照标准范例，如果不是分页查询请使用selectList()方法");
		}
		if (G4Utils.isNotEmpty(limit)) {
			int limitInt = Integer.parseInt(limit);
			/*if (dbNameString.indexOf("ora") > -1) {
				qDto.put("end", limitInt + startInt);
			} else if (dbNameString.indexOf("mysql") > -1) {
				qDto.put("end", limitInt);
			} else {
				qDto.put("end", limitInt);
			}*/
			qDto.put("end", limitInt + startInt);
		}else {
			qDto.put("end", 999999);
			log.warn("缺失分终止页参数,后台已经为你自动赋值，但建议您参照标准范例，如果不是分页查询请使用selectList()方法");
		}

		Integer intStart = qDto.getAsInteger("start");
		Integer end = qDto.getAsInteger("end");
		return getSqlSession().selectList(statementName, qDto, new RowBounds(intStart.intValue(), end.intValue()));
	}

	/**
	 * 更新记录
	 * 
	 * @param SQL语句ID号
	 * @param parameterObject
	 *            更新对象(map javaBean)
	 */
	public int update(String statementName, Object parameterObject) {
		return getSqlSession().update(statementName, parameterObject);
	}

	/**
	 * 更新记录
	 * 
	 * @param SQL语句ID号
	 */
	public int update(String statementName) {
		return getSqlSession().update(statementName, new BaseDto());
	}

	/**
	 * 删除记录
	 * 
	 * @param SQL语句ID号
	 * @param parameterObject
	 *            更新对象(map javaBean)
	 */
	public int delete(String statementName, Object parameterObject) {
		return getSqlSession().delete(statementName, parameterObject);
	}

	/**
	 * 删除记录
	 * 
	 * @param SQL语句ID号
	 */
	public int delete(String statementName) {
		return getSqlSession().delete(statementName,  new BaseDto());
	}

	/**
	 * 调用存储过程<br>
	 * 存储过程成功返回标志缺省：appCode=1
	 * 
	 * @param prcName
	 *            存储过程ID号
	 * @param parameterObject
	 *            参数对象(入参、出参)
	 * @throws PrcException
	 *             存储过程调用异常
	 */
	public void callPrc(String prcName, Dto prcDto) throws PrcException {
		PropertiesHelper pHelper = PropertiesFactory.getPropertiesHelper(PropertiesFile.G4);
		String callPrcSuccessFlag = pHelper.getValue("callPrcSuccessFlag", "1");
		getSqlSession().insert(prcName, prcDto);
		if (G4Utils.isEmpty(prcDto.getAsString("appCode"))) {
			throw new PrcException(prcName, "存储过程没有返回状态码appCode");
		} else {
			if (!prcDto.getAsString("appCode").equals(callPrcSuccessFlag)) {
				throw new PrcException(prcName, prcDto.getAsString("appCode"), prcDto.getAsString("errorMsg"));
			}
		}
	}

	/**
	 * 调用存储过程<br>
	 * 存储过程成功返回标志自定义：appCode=successFlag(自定义的传入变量)
	 * 
	 * @param prcName
	 *            存储过程ID号
	 * @param parameterObject
	 *            参数对象(入参、出参)
	 * @param prcName
	 *            存储过程调用成功返回的成功代码值
	 * @throws PrcException
	 *             存储过程调用异常
	 */
	public void callPrc(String prcName, Dto prcDto, String successFlag)
			throws PrcException {
		getSqlSession().insert(prcName, prcDto);
		if (G4Utils.isEmpty(prcDto.getAsString("appCode"))) {
			throw new PrcException(prcName, "存储过程没有返回状态码appCode");
		} else {
			if (!prcDto.getAsString("appCode").equals(successFlag)) {
				throw new PrcException(prcName, prcDto.getAsString("appCode"), prcDto.getAsString("errorMsg"));
			}
		}
	}

	/**
	 * 获取Connection对象<br>
	 * 说明：虽然向Dao消费端暴露了获取Connection对象的方法但不建议直接获取Connection对象进行JDBC操作
	 * 
	 * @return 返回Connection对象
	 * @throws SQLException
	 */
	public Connection getConnection() throws SQLException {
		return getSqlSession().getConnection();
	}

	/**
	 * 获取DataSource对象<br>
	 * 说明：虽然向Dao消费端暴露了获取DataSource对象的方法但不建议直接获取DataSource对象进行JDBC操作
	 * 
	 * @return 返回DataSource对象
	 */
	public DataSource getDataSourceFromSqlMap() throws SQLException {
		return null;
	}

	/**
	 * 获取SqlMapClientTemplate对象<br>
	 * 
	 * @return 返回SqlMapClientTemplate对象
	 */
	public SqlSession getSqlSessionTpl() {
		// TODO Auto-generated method stub
		return getSqlSession();
	}

}
