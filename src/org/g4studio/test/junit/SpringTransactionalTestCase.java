package org.g4studio.test.junit;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;

/**
 * <p>Title: SpringTransactionalTestCase.java</p>
 * <p>Description: </p>
 * <p>Copyright: Copyright (c) 2013</p>
 * @author 王昕怡
 * @version 1.0
 */
public class SpringTransactionalTestCase extends AbstractTransactionalJUnit4SpringContextTests{
	protected DataSource dataSource;

	@Override
	@Autowired
	public void setDataSource(DataSource dataSource) {
		super.setDataSource(dataSource);
		this.dataSource = dataSource;
	}
}
