package code_fb_cg.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TbGuildataExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TbGuildataExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        protected void addCriterionForJDBCDate(String condition, Date value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value.getTime()), property);
        }

        protected void addCriterionForJDBCDate(String condition, List<Date> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            List<java.sql.Date> dateList = new ArrayList<java.sql.Date>();
            Iterator<Date> iter = values.iterator();
            while (iter.hasNext()) {
                dateList.add(new java.sql.Date(iter.next().getTime()));
            }
            addCriterion(condition, dateList, property);
        }

        protected void addCriterionForJDBCDate(String condition, Date value1, Date value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value1.getTime()), new java.sql.Date(value2.getTime()), property);
        }

        public Criteria andIdIsNull() {
            addCriterion("ID is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("ID is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(String value) {
            addCriterion("ID =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(String value) {
            addCriterion("ID <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(String value) {
            addCriterion("ID >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(String value) {
            addCriterion("ID >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(String value) {
            addCriterion("ID <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(String value) {
            addCriterion("ID <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLike(String value) {
            addCriterion("ID like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotLike(String value) {
            addCriterion("ID not like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<String> values) {
            addCriterion("ID in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<String> values) {
            addCriterion("ID not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(String value1, String value2) {
            addCriterion("ID between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(String value1, String value2) {
            addCriterion("ID not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andCodeIsNull() {
            addCriterion("CODE is null");
            return (Criteria) this;
        }

        public Criteria andCodeIsNotNull() {
            addCriterion("CODE is not null");
            return (Criteria) this;
        }

        public Criteria andCodeEqualTo(String value) {
            addCriterion("CODE =", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeNotEqualTo(String value) {
            addCriterion("CODE <>", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeGreaterThan(String value) {
            addCriterion("CODE >", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeGreaterThanOrEqualTo(String value) {
            addCriterion("CODE >=", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeLessThan(String value) {
            addCriterion("CODE <", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeLessThanOrEqualTo(String value) {
            addCriterion("CODE <=", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeLike(String value) {
            addCriterion("CODE like", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeNotLike(String value) {
            addCriterion("CODE not like", value, "code");
            return (Criteria) this;
        }

        public Criteria andCodeIn(List<String> values) {
            addCriterion("CODE in", values, "code");
            return (Criteria) this;
        }

        public Criteria andCodeNotIn(List<String> values) {
            addCriterion("CODE not in", values, "code");
            return (Criteria) this;
        }

        public Criteria andCodeBetween(String value1, String value2) {
            addCriterion("CODE between", value1, value2, "code");
            return (Criteria) this;
        }

        public Criteria andCodeNotBetween(String value1, String value2) {
            addCriterion("CODE not between", value1, value2, "code");
            return (Criteria) this;
        }

        public Criteria andNameIsNull() {
            addCriterion("NAME is null");
            return (Criteria) this;
        }

        public Criteria andNameIsNotNull() {
            addCriterion("NAME is not null");
            return (Criteria) this;
        }

        public Criteria andNameEqualTo(String value) {
            addCriterion("NAME =", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotEqualTo(String value) {
            addCriterion("NAME <>", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThan(String value) {
            addCriterion("NAME >", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThanOrEqualTo(String value) {
            addCriterion("NAME >=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThan(String value) {
            addCriterion("NAME <", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThanOrEqualTo(String value) {
            addCriterion("NAME <=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLike(String value) {
            addCriterion("NAME like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotLike(String value) {
            addCriterion("NAME not like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameIn(List<String> values) {
            addCriterion("NAME in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotIn(List<String> values) {
            addCriterion("NAME not in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameBetween(String value1, String value2) {
            addCriterion("NAME between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotBetween(String value1, String value2) {
            addCriterion("NAME not between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andCreatorIsNull() {
            addCriterion("CREATOR is null");
            return (Criteria) this;
        }

        public Criteria andCreatorIsNotNull() {
            addCriterion("CREATOR is not null");
            return (Criteria) this;
        }

        public Criteria andCreatorEqualTo(String value) {
            addCriterion("CREATOR =", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorNotEqualTo(String value) {
            addCriterion("CREATOR <>", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorGreaterThan(String value) {
            addCriterion("CREATOR >", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorGreaterThanOrEqualTo(String value) {
            addCriterion("CREATOR >=", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorLessThan(String value) {
            addCriterion("CREATOR <", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorLessThanOrEqualTo(String value) {
            addCriterion("CREATOR <=", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorLike(String value) {
            addCriterion("CREATOR like", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorNotLike(String value) {
            addCriterion("CREATOR not like", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorIn(List<String> values) {
            addCriterion("CREATOR in", values, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorNotIn(List<String> values) {
            addCriterion("CREATOR not in", values, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorBetween(String value1, String value2) {
            addCriterion("CREATOR between", value1, value2, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorNotBetween(String value1, String value2) {
            addCriterion("CREATOR not between", value1, value2, "creator");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNull() {
            addCriterion("CREATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNotNull() {
            addCriterion("CREATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeEqualTo(Date value) {
            addCriterionForJDBCDate("CREATE_TIME =", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("CREATE_TIME <>", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThan(Date value) {
            addCriterionForJDBCDate("CREATE_TIME >", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("CREATE_TIME >=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThan(Date value) {
            addCriterionForJDBCDate("CREATE_TIME <", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("CREATE_TIME <=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIn(List<Date> values) {
            addCriterionForJDBCDate("CREATE_TIME in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("CREATE_TIME not in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("CREATE_TIME between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("CREATE_TIME not between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andUpdaterIsNull() {
            addCriterion("UPDATER is null");
            return (Criteria) this;
        }

        public Criteria andUpdaterIsNotNull() {
            addCriterion("UPDATER is not null");
            return (Criteria) this;
        }

        public Criteria andUpdaterEqualTo(String value) {
            addCriterion("UPDATER =", value, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterNotEqualTo(String value) {
            addCriterion("UPDATER <>", value, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterGreaterThan(String value) {
            addCriterion("UPDATER >", value, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterGreaterThanOrEqualTo(String value) {
            addCriterion("UPDATER >=", value, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterLessThan(String value) {
            addCriterion("UPDATER <", value, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterLessThanOrEqualTo(String value) {
            addCriterion("UPDATER <=", value, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterLike(String value) {
            addCriterion("UPDATER like", value, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterNotLike(String value) {
            addCriterion("UPDATER not like", value, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterIn(List<String> values) {
            addCriterion("UPDATER in", values, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterNotIn(List<String> values) {
            addCriterion("UPDATER not in", values, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterBetween(String value1, String value2) {
            addCriterion("UPDATER between", value1, value2, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdaterNotBetween(String value1, String value2) {
            addCriterion("UPDATER not between", value1, value2, "updater");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIsNull() {
            addCriterion("UPDATE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIsNotNull() {
            addCriterion("UPDATE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeEqualTo(Date value) {
            addCriterionForJDBCDate("UPDATE_TIME =", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("UPDATE_TIME <>", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeGreaterThan(Date value) {
            addCriterionForJDBCDate("UPDATE_TIME >", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("UPDATE_TIME >=", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeLessThan(Date value) {
            addCriterionForJDBCDate("UPDATE_TIME <", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("UPDATE_TIME <=", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIn(List<Date> values) {
            addCriterionForJDBCDate("UPDATE_TIME in", values, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("UPDATE_TIME not in", values, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("UPDATE_TIME between", value1, value2, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("UPDATE_TIME not between", value1, value2, "updateTime");
            return (Criteria) this;
        }

        public Criteria andDeleterIsNull() {
            addCriterion("DELETER is null");
            return (Criteria) this;
        }

        public Criteria andDeleterIsNotNull() {
            addCriterion("DELETER is not null");
            return (Criteria) this;
        }

        public Criteria andDeleterEqualTo(String value) {
            addCriterion("DELETER =", value, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterNotEqualTo(String value) {
            addCriterion("DELETER <>", value, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterGreaterThan(String value) {
            addCriterion("DELETER >", value, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterGreaterThanOrEqualTo(String value) {
            addCriterion("DELETER >=", value, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterLessThan(String value) {
            addCriterion("DELETER <", value, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterLessThanOrEqualTo(String value) {
            addCriterion("DELETER <=", value, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterLike(String value) {
            addCriterion("DELETER like", value, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterNotLike(String value) {
            addCriterion("DELETER not like", value, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterIn(List<String> values) {
            addCriterion("DELETER in", values, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterNotIn(List<String> values) {
            addCriterion("DELETER not in", values, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterBetween(String value1, String value2) {
            addCriterion("DELETER between", value1, value2, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleterNotBetween(String value1, String value2) {
            addCriterion("DELETER not between", value1, value2, "deleter");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeIsNull() {
            addCriterion("DELETE_TIME is null");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeIsNotNull() {
            addCriterion("DELETE_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeEqualTo(Date value) {
            addCriterionForJDBCDate("DELETE_TIME =", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("DELETE_TIME <>", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeGreaterThan(Date value) {
            addCriterionForJDBCDate("DELETE_TIME >", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("DELETE_TIME >=", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeLessThan(Date value) {
            addCriterionForJDBCDate("DELETE_TIME <", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("DELETE_TIME <=", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeIn(List<Date> values) {
            addCriterionForJDBCDate("DELETE_TIME in", values, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("DELETE_TIME not in", values, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("DELETE_TIME between", value1, value2, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("DELETE_TIME not between", value1, value2, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeletedIsNull() {
            addCriterion("DELETED is null");
            return (Criteria) this;
        }

        public Criteria andDeletedIsNotNull() {
            addCriterion("DELETED is not null");
            return (Criteria) this;
        }

        public Criteria andDeletedEqualTo(String value) {
            addCriterion("DELETED =", value, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedNotEqualTo(String value) {
            addCriterion("DELETED <>", value, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedGreaterThan(String value) {
            addCriterion("DELETED >", value, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedGreaterThanOrEqualTo(String value) {
            addCriterion("DELETED >=", value, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedLessThan(String value) {
            addCriterion("DELETED <", value, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedLessThanOrEqualTo(String value) {
            addCriterion("DELETED <=", value, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedLike(String value) {
            addCriterion("DELETED like", value, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedNotLike(String value) {
            addCriterion("DELETED not like", value, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedIn(List<String> values) {
            addCriterion("DELETED in", values, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedNotIn(List<String> values) {
            addCriterion("DELETED not in", values, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedBetween(String value1, String value2) {
            addCriterion("DELETED between", value1, value2, "deleted");
            return (Criteria) this;
        }

        public Criteria andDeletedNotBetween(String value1, String value2) {
            addCriterion("DELETED not between", value1, value2, "deleted");
            return (Criteria) this;
        }

        public Criteria andTimestampIsNull() {
            addCriterion("TIMESTAMP is null");
            return (Criteria) this;
        }

        public Criteria andTimestampIsNotNull() {
            addCriterion("TIMESTAMP is not null");
            return (Criteria) this;
        }

        public Criteria andTimestampEqualTo(Date value) {
            addCriterionForJDBCDate("TIMESTAMP =", value, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampNotEqualTo(Date value) {
            addCriterionForJDBCDate("TIMESTAMP <>", value, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampGreaterThan(Date value) {
            addCriterionForJDBCDate("TIMESTAMP >", value, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("TIMESTAMP >=", value, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampLessThan(Date value) {
            addCriterionForJDBCDate("TIMESTAMP <", value, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("TIMESTAMP <=", value, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampIn(List<Date> values) {
            addCriterionForJDBCDate("TIMESTAMP in", values, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampNotIn(List<Date> values) {
            addCriterionForJDBCDate("TIMESTAMP not in", values, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("TIMESTAMP between", value1, value2, "timestamp");
            return (Criteria) this;
        }

        public Criteria andTimestampNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("TIMESTAMP not between", value1, value2, "timestamp");
            return (Criteria) this;
        }

        public Criteria andCSw01IsNull() {
            addCriterion("C_SW01 is null");
            return (Criteria) this;
        }

        public Criteria andCSw01IsNotNull() {
            addCriterion("C_SW01 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw01EqualTo(String value) {
            addCriterion("C_SW01 =", value, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01NotEqualTo(String value) {
            addCriterion("C_SW01 <>", value, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01GreaterThan(String value) {
            addCriterion("C_SW01 >", value, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW01 >=", value, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01LessThan(String value) {
            addCriterion("C_SW01 <", value, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01LessThanOrEqualTo(String value) {
            addCriterion("C_SW01 <=", value, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01Like(String value) {
            addCriterion("C_SW01 like", value, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01NotLike(String value) {
            addCriterion("C_SW01 not like", value, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01In(List<String> values) {
            addCriterion("C_SW01 in", values, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01NotIn(List<String> values) {
            addCriterion("C_SW01 not in", values, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01Between(String value1, String value2) {
            addCriterion("C_SW01 between", value1, value2, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw01NotBetween(String value1, String value2) {
            addCriterion("C_SW01 not between", value1, value2, "cSw01");
            return (Criteria) this;
        }

        public Criteria andCSw02IsNull() {
            addCriterion("C_SW02 is null");
            return (Criteria) this;
        }

        public Criteria andCSw02IsNotNull() {
            addCriterion("C_SW02 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw02EqualTo(String value) {
            addCriterion("C_SW02 =", value, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02NotEqualTo(String value) {
            addCriterion("C_SW02 <>", value, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02GreaterThan(String value) {
            addCriterion("C_SW02 >", value, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW02 >=", value, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02LessThan(String value) {
            addCriterion("C_SW02 <", value, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02LessThanOrEqualTo(String value) {
            addCriterion("C_SW02 <=", value, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02Like(String value) {
            addCriterion("C_SW02 like", value, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02NotLike(String value) {
            addCriterion("C_SW02 not like", value, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02In(List<String> values) {
            addCriterion("C_SW02 in", values, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02NotIn(List<String> values) {
            addCriterion("C_SW02 not in", values, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02Between(String value1, String value2) {
            addCriterion("C_SW02 between", value1, value2, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw02NotBetween(String value1, String value2) {
            addCriterion("C_SW02 not between", value1, value2, "cSw02");
            return (Criteria) this;
        }

        public Criteria andCSw03IsNull() {
            addCriterion("C_SW03 is null");
            return (Criteria) this;
        }

        public Criteria andCSw03IsNotNull() {
            addCriterion("C_SW03 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw03EqualTo(String value) {
            addCriterion("C_SW03 =", value, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03NotEqualTo(String value) {
            addCriterion("C_SW03 <>", value, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03GreaterThan(String value) {
            addCriterion("C_SW03 >", value, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW03 >=", value, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03LessThan(String value) {
            addCriterion("C_SW03 <", value, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03LessThanOrEqualTo(String value) {
            addCriterion("C_SW03 <=", value, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03Like(String value) {
            addCriterion("C_SW03 like", value, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03NotLike(String value) {
            addCriterion("C_SW03 not like", value, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03In(List<String> values) {
            addCriterion("C_SW03 in", values, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03NotIn(List<String> values) {
            addCriterion("C_SW03 not in", values, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03Between(String value1, String value2) {
            addCriterion("C_SW03 between", value1, value2, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw03NotBetween(String value1, String value2) {
            addCriterion("C_SW03 not between", value1, value2, "cSw03");
            return (Criteria) this;
        }

        public Criteria andCSw04IsNull() {
            addCriterion("C_SW04 is null");
            return (Criteria) this;
        }

        public Criteria andCSw04IsNotNull() {
            addCriterion("C_SW04 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw04EqualTo(String value) {
            addCriterion("C_SW04 =", value, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04NotEqualTo(String value) {
            addCriterion("C_SW04 <>", value, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04GreaterThan(String value) {
            addCriterion("C_SW04 >", value, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW04 >=", value, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04LessThan(String value) {
            addCriterion("C_SW04 <", value, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04LessThanOrEqualTo(String value) {
            addCriterion("C_SW04 <=", value, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04Like(String value) {
            addCriterion("C_SW04 like", value, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04NotLike(String value) {
            addCriterion("C_SW04 not like", value, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04In(List<String> values) {
            addCriterion("C_SW04 in", values, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04NotIn(List<String> values) {
            addCriterion("C_SW04 not in", values, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04Between(String value1, String value2) {
            addCriterion("C_SW04 between", value1, value2, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw04NotBetween(String value1, String value2) {
            addCriterion("C_SW04 not between", value1, value2, "cSw04");
            return (Criteria) this;
        }

        public Criteria andCSw05IsNull() {
            addCriterion("C_SW05 is null");
            return (Criteria) this;
        }

        public Criteria andCSw05IsNotNull() {
            addCriterion("C_SW05 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw05EqualTo(String value) {
            addCriterion("C_SW05 =", value, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05NotEqualTo(String value) {
            addCriterion("C_SW05 <>", value, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05GreaterThan(String value) {
            addCriterion("C_SW05 >", value, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW05 >=", value, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05LessThan(String value) {
            addCriterion("C_SW05 <", value, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05LessThanOrEqualTo(String value) {
            addCriterion("C_SW05 <=", value, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05Like(String value) {
            addCriterion("C_SW05 like", value, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05NotLike(String value) {
            addCriterion("C_SW05 not like", value, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05In(List<String> values) {
            addCriterion("C_SW05 in", values, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05NotIn(List<String> values) {
            addCriterion("C_SW05 not in", values, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05Between(String value1, String value2) {
            addCriterion("C_SW05 between", value1, value2, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw05NotBetween(String value1, String value2) {
            addCriterion("C_SW05 not between", value1, value2, "cSw05");
            return (Criteria) this;
        }

        public Criteria andCSw06IsNull() {
            addCriterion("C_SW06 is null");
            return (Criteria) this;
        }

        public Criteria andCSw06IsNotNull() {
            addCriterion("C_SW06 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw06EqualTo(String value) {
            addCriterion("C_SW06 =", value, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06NotEqualTo(String value) {
            addCriterion("C_SW06 <>", value, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06GreaterThan(String value) {
            addCriterion("C_SW06 >", value, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW06 >=", value, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06LessThan(String value) {
            addCriterion("C_SW06 <", value, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06LessThanOrEqualTo(String value) {
            addCriterion("C_SW06 <=", value, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06Like(String value) {
            addCriterion("C_SW06 like", value, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06NotLike(String value) {
            addCriterion("C_SW06 not like", value, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06In(List<String> values) {
            addCriterion("C_SW06 in", values, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06NotIn(List<String> values) {
            addCriterion("C_SW06 not in", values, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06Between(String value1, String value2) {
            addCriterion("C_SW06 between", value1, value2, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw06NotBetween(String value1, String value2) {
            addCriterion("C_SW06 not between", value1, value2, "cSw06");
            return (Criteria) this;
        }

        public Criteria andCSw07IsNull() {
            addCriterion("C_SW07 is null");
            return (Criteria) this;
        }

        public Criteria andCSw07IsNotNull() {
            addCriterion("C_SW07 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw07EqualTo(String value) {
            addCriterion("C_SW07 =", value, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07NotEqualTo(String value) {
            addCriterion("C_SW07 <>", value, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07GreaterThan(String value) {
            addCriterion("C_SW07 >", value, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW07 >=", value, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07LessThan(String value) {
            addCriterion("C_SW07 <", value, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07LessThanOrEqualTo(String value) {
            addCriterion("C_SW07 <=", value, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07Like(String value) {
            addCriterion("C_SW07 like", value, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07NotLike(String value) {
            addCriterion("C_SW07 not like", value, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07In(List<String> values) {
            addCriterion("C_SW07 in", values, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07NotIn(List<String> values) {
            addCriterion("C_SW07 not in", values, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07Between(String value1, String value2) {
            addCriterion("C_SW07 between", value1, value2, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw07NotBetween(String value1, String value2) {
            addCriterion("C_SW07 not between", value1, value2, "cSw07");
            return (Criteria) this;
        }

        public Criteria andCSw08IsNull() {
            addCriterion("C_SW08 is null");
            return (Criteria) this;
        }

        public Criteria andCSw08IsNotNull() {
            addCriterion("C_SW08 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw08EqualTo(String value) {
            addCriterion("C_SW08 =", value, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08NotEqualTo(String value) {
            addCriterion("C_SW08 <>", value, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08GreaterThan(String value) {
            addCriterion("C_SW08 >", value, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW08 >=", value, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08LessThan(String value) {
            addCriterion("C_SW08 <", value, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08LessThanOrEqualTo(String value) {
            addCriterion("C_SW08 <=", value, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08Like(String value) {
            addCriterion("C_SW08 like", value, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08NotLike(String value) {
            addCriterion("C_SW08 not like", value, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08In(List<String> values) {
            addCriterion("C_SW08 in", values, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08NotIn(List<String> values) {
            addCriterion("C_SW08 not in", values, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08Between(String value1, String value2) {
            addCriterion("C_SW08 between", value1, value2, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw08NotBetween(String value1, String value2) {
            addCriterion("C_SW08 not between", value1, value2, "cSw08");
            return (Criteria) this;
        }

        public Criteria andCSw09IsNull() {
            addCriterion("C_SW09 is null");
            return (Criteria) this;
        }

        public Criteria andCSw09IsNotNull() {
            addCriterion("C_SW09 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw09EqualTo(String value) {
            addCriterion("C_SW09 =", value, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09NotEqualTo(String value) {
            addCriterion("C_SW09 <>", value, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09GreaterThan(String value) {
            addCriterion("C_SW09 >", value, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW09 >=", value, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09LessThan(String value) {
            addCriterion("C_SW09 <", value, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09LessThanOrEqualTo(String value) {
            addCriterion("C_SW09 <=", value, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09Like(String value) {
            addCriterion("C_SW09 like", value, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09NotLike(String value) {
            addCriterion("C_SW09 not like", value, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09In(List<String> values) {
            addCriterion("C_SW09 in", values, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09NotIn(List<String> values) {
            addCriterion("C_SW09 not in", values, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09Between(String value1, String value2) {
            addCriterion("C_SW09 between", value1, value2, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw09NotBetween(String value1, String value2) {
            addCriterion("C_SW09 not between", value1, value2, "cSw09");
            return (Criteria) this;
        }

        public Criteria andCSw10IsNull() {
            addCriterion("C_SW10 is null");
            return (Criteria) this;
        }

        public Criteria andCSw10IsNotNull() {
            addCriterion("C_SW10 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw10EqualTo(String value) {
            addCriterion("C_SW10 =", value, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10NotEqualTo(String value) {
            addCriterion("C_SW10 <>", value, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10GreaterThan(String value) {
            addCriterion("C_SW10 >", value, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW10 >=", value, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10LessThan(String value) {
            addCriterion("C_SW10 <", value, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10LessThanOrEqualTo(String value) {
            addCriterion("C_SW10 <=", value, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10Like(String value) {
            addCriterion("C_SW10 like", value, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10NotLike(String value) {
            addCriterion("C_SW10 not like", value, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10In(List<String> values) {
            addCriterion("C_SW10 in", values, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10NotIn(List<String> values) {
            addCriterion("C_SW10 not in", values, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10Between(String value1, String value2) {
            addCriterion("C_SW10 between", value1, value2, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw10NotBetween(String value1, String value2) {
            addCriterion("C_SW10 not between", value1, value2, "cSw10");
            return (Criteria) this;
        }

        public Criteria andCSw11IsNull() {
            addCriterion("C_SW11 is null");
            return (Criteria) this;
        }

        public Criteria andCSw11IsNotNull() {
            addCriterion("C_SW11 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw11EqualTo(String value) {
            addCriterion("C_SW11 =", value, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11NotEqualTo(String value) {
            addCriterion("C_SW11 <>", value, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11GreaterThan(String value) {
            addCriterion("C_SW11 >", value, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW11 >=", value, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11LessThan(String value) {
            addCriterion("C_SW11 <", value, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11LessThanOrEqualTo(String value) {
            addCriterion("C_SW11 <=", value, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11Like(String value) {
            addCriterion("C_SW11 like", value, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11NotLike(String value) {
            addCriterion("C_SW11 not like", value, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11In(List<String> values) {
            addCriterion("C_SW11 in", values, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11NotIn(List<String> values) {
            addCriterion("C_SW11 not in", values, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11Between(String value1, String value2) {
            addCriterion("C_SW11 between", value1, value2, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw11NotBetween(String value1, String value2) {
            addCriterion("C_SW11 not between", value1, value2, "cSw11");
            return (Criteria) this;
        }

        public Criteria andCSw12IsNull() {
            addCriterion("C_SW12 is null");
            return (Criteria) this;
        }

        public Criteria andCSw12IsNotNull() {
            addCriterion("C_SW12 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw12EqualTo(String value) {
            addCriterion("C_SW12 =", value, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12NotEqualTo(String value) {
            addCriterion("C_SW12 <>", value, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12GreaterThan(String value) {
            addCriterion("C_SW12 >", value, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW12 >=", value, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12LessThan(String value) {
            addCriterion("C_SW12 <", value, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12LessThanOrEqualTo(String value) {
            addCriterion("C_SW12 <=", value, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12Like(String value) {
            addCriterion("C_SW12 like", value, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12NotLike(String value) {
            addCriterion("C_SW12 not like", value, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12In(List<String> values) {
            addCriterion("C_SW12 in", values, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12NotIn(List<String> values) {
            addCriterion("C_SW12 not in", values, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12Between(String value1, String value2) {
            addCriterion("C_SW12 between", value1, value2, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw12NotBetween(String value1, String value2) {
            addCriterion("C_SW12 not between", value1, value2, "cSw12");
            return (Criteria) this;
        }

        public Criteria andCSw13IsNull() {
            addCriterion("C_SW13 is null");
            return (Criteria) this;
        }

        public Criteria andCSw13IsNotNull() {
            addCriterion("C_SW13 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw13EqualTo(String value) {
            addCriterion("C_SW13 =", value, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13NotEqualTo(String value) {
            addCriterion("C_SW13 <>", value, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13GreaterThan(String value) {
            addCriterion("C_SW13 >", value, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW13 >=", value, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13LessThan(String value) {
            addCriterion("C_SW13 <", value, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13LessThanOrEqualTo(String value) {
            addCriterion("C_SW13 <=", value, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13Like(String value) {
            addCriterion("C_SW13 like", value, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13NotLike(String value) {
            addCriterion("C_SW13 not like", value, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13In(List<String> values) {
            addCriterion("C_SW13 in", values, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13NotIn(List<String> values) {
            addCriterion("C_SW13 not in", values, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13Between(String value1, String value2) {
            addCriterion("C_SW13 between", value1, value2, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw13NotBetween(String value1, String value2) {
            addCriterion("C_SW13 not between", value1, value2, "cSw13");
            return (Criteria) this;
        }

        public Criteria andCSw14IsNull() {
            addCriterion("C_SW14 is null");
            return (Criteria) this;
        }

        public Criteria andCSw14IsNotNull() {
            addCriterion("C_SW14 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw14EqualTo(String value) {
            addCriterion("C_SW14 =", value, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14NotEqualTo(String value) {
            addCriterion("C_SW14 <>", value, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14GreaterThan(String value) {
            addCriterion("C_SW14 >", value, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW14 >=", value, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14LessThan(String value) {
            addCriterion("C_SW14 <", value, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14LessThanOrEqualTo(String value) {
            addCriterion("C_SW14 <=", value, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14Like(String value) {
            addCriterion("C_SW14 like", value, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14NotLike(String value) {
            addCriterion("C_SW14 not like", value, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14In(List<String> values) {
            addCriterion("C_SW14 in", values, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14NotIn(List<String> values) {
            addCriterion("C_SW14 not in", values, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14Between(String value1, String value2) {
            addCriterion("C_SW14 between", value1, value2, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw14NotBetween(String value1, String value2) {
            addCriterion("C_SW14 not between", value1, value2, "cSw14");
            return (Criteria) this;
        }

        public Criteria andCSw15IsNull() {
            addCriterion("C_SW15 is null");
            return (Criteria) this;
        }

        public Criteria andCSw15IsNotNull() {
            addCriterion("C_SW15 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw15EqualTo(String value) {
            addCriterion("C_SW15 =", value, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15NotEqualTo(String value) {
            addCriterion("C_SW15 <>", value, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15GreaterThan(String value) {
            addCriterion("C_SW15 >", value, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW15 >=", value, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15LessThan(String value) {
            addCriterion("C_SW15 <", value, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15LessThanOrEqualTo(String value) {
            addCriterion("C_SW15 <=", value, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15Like(String value) {
            addCriterion("C_SW15 like", value, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15NotLike(String value) {
            addCriterion("C_SW15 not like", value, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15In(List<String> values) {
            addCriterion("C_SW15 in", values, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15NotIn(List<String> values) {
            addCriterion("C_SW15 not in", values, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15Between(String value1, String value2) {
            addCriterion("C_SW15 between", value1, value2, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw15NotBetween(String value1, String value2) {
            addCriterion("C_SW15 not between", value1, value2, "cSw15");
            return (Criteria) this;
        }

        public Criteria andCSw16IsNull() {
            addCriterion("C_SW16 is null");
            return (Criteria) this;
        }

        public Criteria andCSw16IsNotNull() {
            addCriterion("C_SW16 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw16EqualTo(String value) {
            addCriterion("C_SW16 =", value, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16NotEqualTo(String value) {
            addCriterion("C_SW16 <>", value, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16GreaterThan(String value) {
            addCriterion("C_SW16 >", value, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW16 >=", value, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16LessThan(String value) {
            addCriterion("C_SW16 <", value, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16LessThanOrEqualTo(String value) {
            addCriterion("C_SW16 <=", value, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16Like(String value) {
            addCriterion("C_SW16 like", value, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16NotLike(String value) {
            addCriterion("C_SW16 not like", value, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16In(List<String> values) {
            addCriterion("C_SW16 in", values, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16NotIn(List<String> values) {
            addCriterion("C_SW16 not in", values, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16Between(String value1, String value2) {
            addCriterion("C_SW16 between", value1, value2, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw16NotBetween(String value1, String value2) {
            addCriterion("C_SW16 not between", value1, value2, "cSw16");
            return (Criteria) this;
        }

        public Criteria andCSw17IsNull() {
            addCriterion("C_SW17 is null");
            return (Criteria) this;
        }

        public Criteria andCSw17IsNotNull() {
            addCriterion("C_SW17 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw17EqualTo(String value) {
            addCriterion("C_SW17 =", value, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17NotEqualTo(String value) {
            addCriterion("C_SW17 <>", value, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17GreaterThan(String value) {
            addCriterion("C_SW17 >", value, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW17 >=", value, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17LessThan(String value) {
            addCriterion("C_SW17 <", value, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17LessThanOrEqualTo(String value) {
            addCriterion("C_SW17 <=", value, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17Like(String value) {
            addCriterion("C_SW17 like", value, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17NotLike(String value) {
            addCriterion("C_SW17 not like", value, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17In(List<String> values) {
            addCriterion("C_SW17 in", values, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17NotIn(List<String> values) {
            addCriterion("C_SW17 not in", values, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17Between(String value1, String value2) {
            addCriterion("C_SW17 between", value1, value2, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw17NotBetween(String value1, String value2) {
            addCriterion("C_SW17 not between", value1, value2, "cSw17");
            return (Criteria) this;
        }

        public Criteria andCSw18IsNull() {
            addCriterion("C_SW18 is null");
            return (Criteria) this;
        }

        public Criteria andCSw18IsNotNull() {
            addCriterion("C_SW18 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw18EqualTo(String value) {
            addCriterion("C_SW18 =", value, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18NotEqualTo(String value) {
            addCriterion("C_SW18 <>", value, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18GreaterThan(String value) {
            addCriterion("C_SW18 >", value, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW18 >=", value, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18LessThan(String value) {
            addCriterion("C_SW18 <", value, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18LessThanOrEqualTo(String value) {
            addCriterion("C_SW18 <=", value, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18Like(String value) {
            addCriterion("C_SW18 like", value, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18NotLike(String value) {
            addCriterion("C_SW18 not like", value, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18In(List<String> values) {
            addCriterion("C_SW18 in", values, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18NotIn(List<String> values) {
            addCriterion("C_SW18 not in", values, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18Between(String value1, String value2) {
            addCriterion("C_SW18 between", value1, value2, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw18NotBetween(String value1, String value2) {
            addCriterion("C_SW18 not between", value1, value2, "cSw18");
            return (Criteria) this;
        }

        public Criteria andCSw19IsNull() {
            addCriterion("C_SW19 is null");
            return (Criteria) this;
        }

        public Criteria andCSw19IsNotNull() {
            addCriterion("C_SW19 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw19EqualTo(String value) {
            addCriterion("C_SW19 =", value, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19NotEqualTo(String value) {
            addCriterion("C_SW19 <>", value, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19GreaterThan(String value) {
            addCriterion("C_SW19 >", value, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW19 >=", value, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19LessThan(String value) {
            addCriterion("C_SW19 <", value, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19LessThanOrEqualTo(String value) {
            addCriterion("C_SW19 <=", value, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19Like(String value) {
            addCriterion("C_SW19 like", value, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19NotLike(String value) {
            addCriterion("C_SW19 not like", value, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19In(List<String> values) {
            addCriterion("C_SW19 in", values, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19NotIn(List<String> values) {
            addCriterion("C_SW19 not in", values, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19Between(String value1, String value2) {
            addCriterion("C_SW19 between", value1, value2, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw19NotBetween(String value1, String value2) {
            addCriterion("C_SW19 not between", value1, value2, "cSw19");
            return (Criteria) this;
        }

        public Criteria andCSw20IsNull() {
            addCriterion("C_SW20 is null");
            return (Criteria) this;
        }

        public Criteria andCSw20IsNotNull() {
            addCriterion("C_SW20 is not null");
            return (Criteria) this;
        }

        public Criteria andCSw20EqualTo(String value) {
            addCriterion("C_SW20 =", value, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20NotEqualTo(String value) {
            addCriterion("C_SW20 <>", value, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20GreaterThan(String value) {
            addCriterion("C_SW20 >", value, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20GreaterThanOrEqualTo(String value) {
            addCriterion("C_SW20 >=", value, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20LessThan(String value) {
            addCriterion("C_SW20 <", value, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20LessThanOrEqualTo(String value) {
            addCriterion("C_SW20 <=", value, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20Like(String value) {
            addCriterion("C_SW20 like", value, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20NotLike(String value) {
            addCriterion("C_SW20 not like", value, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20In(List<String> values) {
            addCriterion("C_SW20 in", values, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20NotIn(List<String> values) {
            addCriterion("C_SW20 not in", values, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20Between(String value1, String value2) {
            addCriterion("C_SW20 between", value1, value2, "cSw20");
            return (Criteria) this;
        }

        public Criteria andCSw20NotBetween(String value1, String value2) {
            addCriterion("C_SW20 not between", value1, value2, "cSw20");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}