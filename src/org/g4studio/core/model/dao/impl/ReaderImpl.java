package org.g4studio.core.model.dao.impl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.session.RowBounds;
import org.g4studio.core.metatype.Dto;
import org.g4studio.core.metatype.impl.BaseDto;
import org.g4studio.core.model.dao.Reader;
import org.g4studio.core.util.G4Utils;
import org.mybatis.spring.support.SqlSessionDaoSupport;

/**
 * <p>Title: ReaderImpl.java</p>
 * <p>Description: 数据读取器-基于iBatis实现,只有query权限,提供在Action中使用</p>
 * <p></p>
 * <p>Copyright: Copyright (c) 2013</p>
 * @author 王昕怡
 * @version 1.0
 */
public class ReaderImpl extends SqlSessionDaoSupport implements Reader{
	
	private static Log log = LogFactory.getLog(ReaderImpl.class);

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
		} else {
			qDto.put("start", 0);
			log.warn("缺失分页起始参数,后台已经为你自动赋值，但建议您参照标准范例，如果不是分页查询请使用queryForList()方法");
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
		} else {
			qDto.put("end", 999999);
			log.warn("缺失分页终止参数,后台已经为你自动赋值，但建议您参照标准范例，如果不是分页查询请使用queryForList()方法");
		}
		Integer intStart = qDto.getAsInteger("start");
		Integer end = qDto.getAsInteger("end");
		return getSqlSession().selectList(statementName, qDto, new RowBounds(intStart.intValue(), end.intValue()));
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

}
