package code_fb_cg.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TbCgclausedataExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TbCgclausedataExample() {
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

        public Criteria andCIdIsNull() {
            addCriterion("C_ID is null");
            return (Criteria) this;
        }

        public Criteria andCIdIsNotNull() {
            addCriterion("C_ID is not null");
            return (Criteria) this;
        }

        public Criteria andCIdEqualTo(String value) {
            addCriterion("C_ID =", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdNotEqualTo(String value) {
            addCriterion("C_ID <>", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdGreaterThan(String value) {
            addCriterion("C_ID >", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdGreaterThanOrEqualTo(String value) {
            addCriterion("C_ID >=", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdLessThan(String value) {
            addCriterion("C_ID <", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdLessThanOrEqualTo(String value) {
            addCriterion("C_ID <=", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdLike(String value) {
            addCriterion("C_ID like", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdNotLike(String value) {
            addCriterion("C_ID not like", value, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdIn(List<String> values) {
            addCriterion("C_ID in", values, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdNotIn(List<String> values) {
            addCriterion("C_ID not in", values, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdBetween(String value1, String value2) {
            addCriterion("C_ID between", value1, value2, "cId");
            return (Criteria) this;
        }

        public Criteria andCIdNotBetween(String value1, String value2) {
            addCriterion("C_ID not between", value1, value2, "cId");
            return (Criteria) this;
        }

        public Criteria andCItemidIsNull() {
            addCriterion("C_ITEMID is null");
            return (Criteria) this;
        }

        public Criteria andCItemidIsNotNull() {
            addCriterion("C_ITEMID is not null");
            return (Criteria) this;
        }

        public Criteria andCItemidEqualTo(String value) {
            addCriterion("C_ITEMID =", value, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidNotEqualTo(String value) {
            addCriterion("C_ITEMID <>", value, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidGreaterThan(String value) {
            addCriterion("C_ITEMID >", value, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidGreaterThanOrEqualTo(String value) {
            addCriterion("C_ITEMID >=", value, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidLessThan(String value) {
            addCriterion("C_ITEMID <", value, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidLessThanOrEqualTo(String value) {
            addCriterion("C_ITEMID <=", value, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidLike(String value) {
            addCriterion("C_ITEMID like", value, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidNotLike(String value) {
            addCriterion("C_ITEMID not like", value, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidIn(List<String> values) {
            addCriterion("C_ITEMID in", values, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidNotIn(List<String> values) {
            addCriterion("C_ITEMID not in", values, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidBetween(String value1, String value2) {
            addCriterion("C_ITEMID between", value1, value2, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemidNotBetween(String value1, String value2) {
            addCriterion("C_ITEMID not between", value1, value2, "cItemid");
            return (Criteria) this;
        }

        public Criteria andCItemdesIsNull() {
            addCriterion("C_ITEMDES is null");
            return (Criteria) this;
        }

        public Criteria andCItemdesIsNotNull() {
            addCriterion("C_ITEMDES is not null");
            return (Criteria) this;
        }

        public Criteria andCItemdesEqualTo(String value) {
            addCriterion("C_ITEMDES =", value, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesNotEqualTo(String value) {
            addCriterion("C_ITEMDES <>", value, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesGreaterThan(String value) {
            addCriterion("C_ITEMDES >", value, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesGreaterThanOrEqualTo(String value) {
            addCriterion("C_ITEMDES >=", value, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesLessThan(String value) {
            addCriterion("C_ITEMDES <", value, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesLessThanOrEqualTo(String value) {
            addCriterion("C_ITEMDES <=", value, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesLike(String value) {
            addCriterion("C_ITEMDES like", value, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesNotLike(String value) {
            addCriterion("C_ITEMDES not like", value, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesIn(List<String> values) {
            addCriterion("C_ITEMDES in", values, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesNotIn(List<String> values) {
            addCriterion("C_ITEMDES not in", values, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesBetween(String value1, String value2) {
            addCriterion("C_ITEMDES between", value1, value2, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCItemdesNotBetween(String value1, String value2) {
            addCriterion("C_ITEMDES not between", value1, value2, "cItemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemidIsNull() {
            addCriterion("C_FAITEMID is null");
            return (Criteria) this;
        }

        public Criteria andCFaitemidIsNotNull() {
            addCriterion("C_FAITEMID is not null");
            return (Criteria) this;
        }

        public Criteria andCFaitemidEqualTo(String value) {
            addCriterion("C_FAITEMID =", value, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidNotEqualTo(String value) {
            addCriterion("C_FAITEMID <>", value, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidGreaterThan(String value) {
            addCriterion("C_FAITEMID >", value, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidGreaterThanOrEqualTo(String value) {
            addCriterion("C_FAITEMID >=", value, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidLessThan(String value) {
            addCriterion("C_FAITEMID <", value, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidLessThanOrEqualTo(String value) {
            addCriterion("C_FAITEMID <=", value, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidLike(String value) {
            addCriterion("C_FAITEMID like", value, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidNotLike(String value) {
            addCriterion("C_FAITEMID not like", value, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidIn(List<String> values) {
            addCriterion("C_FAITEMID in", values, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidNotIn(List<String> values) {
            addCriterion("C_FAITEMID not in", values, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidBetween(String value1, String value2) {
            addCriterion("C_FAITEMID between", value1, value2, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemidNotBetween(String value1, String value2) {
            addCriterion("C_FAITEMID not between", value1, value2, "cFaitemid");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesIsNull() {
            addCriterion("C_FAITEMDES is null");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesIsNotNull() {
            addCriterion("C_FAITEMDES is not null");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesEqualTo(String value) {
            addCriterion("C_FAITEMDES =", value, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesNotEqualTo(String value) {
            addCriterion("C_FAITEMDES <>", value, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesGreaterThan(String value) {
            addCriterion("C_FAITEMDES >", value, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesGreaterThanOrEqualTo(String value) {
            addCriterion("C_FAITEMDES >=", value, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesLessThan(String value) {
            addCriterion("C_FAITEMDES <", value, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesLessThanOrEqualTo(String value) {
            addCriterion("C_FAITEMDES <=", value, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesLike(String value) {
            addCriterion("C_FAITEMDES like", value, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesNotLike(String value) {
            addCriterion("C_FAITEMDES not like", value, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesIn(List<String> values) {
            addCriterion("C_FAITEMDES in", values, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesNotIn(List<String> values) {
            addCriterion("C_FAITEMDES not in", values, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesBetween(String value1, String value2) {
            addCriterion("C_FAITEMDES between", value1, value2, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCFaitemdesNotBetween(String value1, String value2) {
            addCriterion("C_FAITEMDES not between", value1, value2, "cFaitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemidIsNull() {
            addCriterion("C_SUBITEMID is null");
            return (Criteria) this;
        }

        public Criteria andCSubitemidIsNotNull() {
            addCriterion("C_SUBITEMID is not null");
            return (Criteria) this;
        }

        public Criteria andCSubitemidEqualTo(String value) {
            addCriterion("C_SUBITEMID =", value, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidNotEqualTo(String value) {
            addCriterion("C_SUBITEMID <>", value, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidGreaterThan(String value) {
            addCriterion("C_SUBITEMID >", value, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidGreaterThanOrEqualTo(String value) {
            addCriterion("C_SUBITEMID >=", value, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidLessThan(String value) {
            addCriterion("C_SUBITEMID <", value, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidLessThanOrEqualTo(String value) {
            addCriterion("C_SUBITEMID <=", value, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidLike(String value) {
            addCriterion("C_SUBITEMID like", value, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidNotLike(String value) {
            addCriterion("C_SUBITEMID not like", value, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidIn(List<String> values) {
            addCriterion("C_SUBITEMID in", values, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidNotIn(List<String> values) {
            addCriterion("C_SUBITEMID not in", values, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidBetween(String value1, String value2) {
            addCriterion("C_SUBITEMID between", value1, value2, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemidNotBetween(String value1, String value2) {
            addCriterion("C_SUBITEMID not between", value1, value2, "cSubitemid");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesIsNull() {
            addCriterion("C_SUBITEMDES is null");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesIsNotNull() {
            addCriterion("C_SUBITEMDES is not null");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesEqualTo(String value) {
            addCriterion("C_SUBITEMDES =", value, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesNotEqualTo(String value) {
            addCriterion("C_SUBITEMDES <>", value, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesGreaterThan(String value) {
            addCriterion("C_SUBITEMDES >", value, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesGreaterThanOrEqualTo(String value) {
            addCriterion("C_SUBITEMDES >=", value, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesLessThan(String value) {
            addCriterion("C_SUBITEMDES <", value, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesLessThanOrEqualTo(String value) {
            addCriterion("C_SUBITEMDES <=", value, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesLike(String value) {
            addCriterion("C_SUBITEMDES like", value, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesNotLike(String value) {
            addCriterion("C_SUBITEMDES not like", value, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesIn(List<String> values) {
            addCriterion("C_SUBITEMDES in", values, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesNotIn(List<String> values) {
            addCriterion("C_SUBITEMDES not in", values, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesBetween(String value1, String value2) {
            addCriterion("C_SUBITEMDES between", value1, value2, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCSubitemdesNotBetween(String value1, String value2) {
            addCriterion("C_SUBITEMDES not between", value1, value2, "cSubitemdes");
            return (Criteria) this;
        }

        public Criteria andCGroupIsNull() {
            addCriterion("C_GROUP is null");
            return (Criteria) this;
        }

        public Criteria andCGroupIsNotNull() {
            addCriterion("C_GROUP is not null");
            return (Criteria) this;
        }

        public Criteria andCGroupEqualTo(String value) {
            addCriterion("C_GROUP =", value, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupNotEqualTo(String value) {
            addCriterion("C_GROUP <>", value, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupGreaterThan(String value) {
            addCriterion("C_GROUP >", value, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupGreaterThanOrEqualTo(String value) {
            addCriterion("C_GROUP >=", value, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupLessThan(String value) {
            addCriterion("C_GROUP <", value, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupLessThanOrEqualTo(String value) {
            addCriterion("C_GROUP <=", value, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupLike(String value) {
            addCriterion("C_GROUP like", value, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupNotLike(String value) {
            addCriterion("C_GROUP not like", value, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupIn(List<String> values) {
            addCriterion("C_GROUP in", values, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupNotIn(List<String> values) {
            addCriterion("C_GROUP not in", values, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupBetween(String value1, String value2) {
            addCriterion("C_GROUP between", value1, value2, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCGroupNotBetween(String value1, String value2) {
            addCriterion("C_GROUP not between", value1, value2, "cGroup");
            return (Criteria) this;
        }

        public Criteria andCOrderIsNull() {
            addCriterion("C_ORDER is null");
            return (Criteria) this;
        }

        public Criteria andCOrderIsNotNull() {
            addCriterion("C_ORDER is not null");
            return (Criteria) this;
        }

        public Criteria andCOrderEqualTo(BigDecimal value) {
            addCriterion("C_ORDER =", value, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderNotEqualTo(BigDecimal value) {
            addCriterion("C_ORDER <>", value, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderGreaterThan(BigDecimal value) {
            addCriterion("C_ORDER >", value, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("C_ORDER >=", value, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderLessThan(BigDecimal value) {
            addCriterion("C_ORDER <", value, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderLessThanOrEqualTo(BigDecimal value) {
            addCriterion("C_ORDER <=", value, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderIn(List<BigDecimal> values) {
            addCriterion("C_ORDER in", values, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderNotIn(List<BigDecimal> values) {
            addCriterion("C_ORDER not in", values, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("C_ORDER between", value1, value2, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCOrderNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("C_ORDER not between", value1, value2, "cOrder");
            return (Criteria) this;
        }

        public Criteria andCEnabledIsNull() {
            addCriterion("C_ENABLED is null");
            return (Criteria) this;
        }

        public Criteria andCEnabledIsNotNull() {
            addCriterion("C_ENABLED is not null");
            return (Criteria) this;
        }

        public Criteria andCEnabledEqualTo(String value) {
            addCriterion("C_ENABLED =", value, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledNotEqualTo(String value) {
            addCriterion("C_ENABLED <>", value, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledGreaterThan(String value) {
            addCriterion("C_ENABLED >", value, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledGreaterThanOrEqualTo(String value) {
            addCriterion("C_ENABLED >=", value, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledLessThan(String value) {
            addCriterion("C_ENABLED <", value, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledLessThanOrEqualTo(String value) {
            addCriterion("C_ENABLED <=", value, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledLike(String value) {
            addCriterion("C_ENABLED like", value, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledNotLike(String value) {
            addCriterion("C_ENABLED not like", value, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledIn(List<String> values) {
            addCriterion("C_ENABLED in", values, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledNotIn(List<String> values) {
            addCriterion("C_ENABLED not in", values, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledBetween(String value1, String value2) {
            addCriterion("C_ENABLED between", value1, value2, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCEnabledNotBetween(String value1, String value2) {
            addCriterion("C_ENABLED not between", value1, value2, "cEnabled");
            return (Criteria) this;
        }

        public Criteria andCValueIsNull() {
            addCriterion("C_VALUE is null");
            return (Criteria) this;
        }

        public Criteria andCValueIsNotNull() {
            addCriterion("C_VALUE is not null");
            return (Criteria) this;
        }

        public Criteria andCValueEqualTo(String value) {
            addCriterion("C_VALUE =", value, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueNotEqualTo(String value) {
            addCriterion("C_VALUE <>", value, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueGreaterThan(String value) {
            addCriterion("C_VALUE >", value, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueGreaterThanOrEqualTo(String value) {
            addCriterion("C_VALUE >=", value, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueLessThan(String value) {
            addCriterion("C_VALUE <", value, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueLessThanOrEqualTo(String value) {
            addCriterion("C_VALUE <=", value, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueLike(String value) {
            addCriterion("C_VALUE like", value, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueNotLike(String value) {
            addCriterion("C_VALUE not like", value, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueIn(List<String> values) {
            addCriterion("C_VALUE in", values, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueNotIn(List<String> values) {
            addCriterion("C_VALUE not in", values, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueBetween(String value1, String value2) {
            addCriterion("C_VALUE between", value1, value2, "cValue");
            return (Criteria) this;
        }

        public Criteria andCValueNotBetween(String value1, String value2) {
            addCriterion("C_VALUE not between", value1, value2, "cValue");
            return (Criteria) this;
        }

        public Criteria andCDrIsNull() {
            addCriterion("C_DR is null");
            return (Criteria) this;
        }

        public Criteria andCDrIsNotNull() {
            addCriterion("C_DR is not null");
            return (Criteria) this;
        }

        public Criteria andCDrEqualTo(String value) {
            addCriterion("C_DR =", value, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrNotEqualTo(String value) {
            addCriterion("C_DR <>", value, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrGreaterThan(String value) {
            addCriterion("C_DR >", value, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrGreaterThanOrEqualTo(String value) {
            addCriterion("C_DR >=", value, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrLessThan(String value) {
            addCriterion("C_DR <", value, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrLessThanOrEqualTo(String value) {
            addCriterion("C_DR <=", value, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrLike(String value) {
            addCriterion("C_DR like", value, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrNotLike(String value) {
            addCriterion("C_DR not like", value, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrIn(List<String> values) {
            addCriterion("C_DR in", values, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrNotIn(List<String> values) {
            addCriterion("C_DR not in", values, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrBetween(String value1, String value2) {
            addCriterion("C_DR between", value1, value2, "cDr");
            return (Criteria) this;
        }

        public Criteria andCDrNotBetween(String value1, String value2) {
            addCriterion("C_DR not between", value1, value2, "cDr");
            return (Criteria) this;
        }

        public Criteria andCTimestampIsNull() {
            addCriterion("C_TIMESTAMP is null");
            return (Criteria) this;
        }

        public Criteria andCTimestampIsNotNull() {
            addCriterion("C_TIMESTAMP is not null");
            return (Criteria) this;
        }

        public Criteria andCTimestampEqualTo(Date value) {
            addCriterion("C_TIMESTAMP =", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampNotEqualTo(Date value) {
            addCriterion("C_TIMESTAMP <>", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampGreaterThan(Date value) {
            addCriterion("C_TIMESTAMP >", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampGreaterThanOrEqualTo(Date value) {
            addCriterion("C_TIMESTAMP >=", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampLessThan(Date value) {
            addCriterion("C_TIMESTAMP <", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampLessThanOrEqualTo(Date value) {
            addCriterion("C_TIMESTAMP <=", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampIn(List<Date> values) {
            addCriterion("C_TIMESTAMP in", values, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampNotIn(List<Date> values) {
            addCriterion("C_TIMESTAMP not in", values, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampBetween(Date value1, Date value2) {
            addCriterion("C_TIMESTAMP between", value1, value2, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampNotBetween(Date value1, Date value2) {
            addCriterion("C_TIMESTAMP not between", value1, value2, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCCreaterIsNull() {
            addCriterion("C_CREATER is null");
            return (Criteria) this;
        }

        public Criteria andCCreaterIsNotNull() {
            addCriterion("C_CREATER is not null");
            return (Criteria) this;
        }

        public Criteria andCCreaterEqualTo(String value) {
            addCriterion("C_CREATER =", value, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterNotEqualTo(String value) {
            addCriterion("C_CREATER <>", value, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterGreaterThan(String value) {
            addCriterion("C_CREATER >", value, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterGreaterThanOrEqualTo(String value) {
            addCriterion("C_CREATER >=", value, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterLessThan(String value) {
            addCriterion("C_CREATER <", value, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterLessThanOrEqualTo(String value) {
            addCriterion("C_CREATER <=", value, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterLike(String value) {
            addCriterion("C_CREATER like", value, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterNotLike(String value) {
            addCriterion("C_CREATER not like", value, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterIn(List<String> values) {
            addCriterion("C_CREATER in", values, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterNotIn(List<String> values) {
            addCriterion("C_CREATER not in", values, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterBetween(String value1, String value2) {
            addCriterion("C_CREATER between", value1, value2, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreaterNotBetween(String value1, String value2) {
            addCriterion("C_CREATER not between", value1, value2, "cCreater");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeIsNull() {
            addCriterion("C_CREATETIME is null");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeIsNotNull() {
            addCriterion("C_CREATETIME is not null");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_CREATETIME =", value, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_CREATETIME <>", value, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_CREATETIME >", value, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_CREATETIME >=", value, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeLessThan(Date value) {
            addCriterionForJDBCDate("C_CREATETIME <", value, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_CREATETIME <=", value, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_CREATETIME in", values, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_CREATETIME not in", values, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_CREATETIME between", value1, value2, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCCreatetimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_CREATETIME not between", value1, value2, "cCreatetime");
            return (Criteria) this;
        }

        public Criteria andCModifierIsNull() {
            addCriterion("C_MODIFIER is null");
            return (Criteria) this;
        }

        public Criteria andCModifierIsNotNull() {
            addCriterion("C_MODIFIER is not null");
            return (Criteria) this;
        }

        public Criteria andCModifierEqualTo(String value) {
            addCriterion("C_MODIFIER =", value, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierNotEqualTo(String value) {
            addCriterion("C_MODIFIER <>", value, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierGreaterThan(String value) {
            addCriterion("C_MODIFIER >", value, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierGreaterThanOrEqualTo(String value) {
            addCriterion("C_MODIFIER >=", value, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierLessThan(String value) {
            addCriterion("C_MODIFIER <", value, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierLessThanOrEqualTo(String value) {
            addCriterion("C_MODIFIER <=", value, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierLike(String value) {
            addCriterion("C_MODIFIER like", value, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierNotLike(String value) {
            addCriterion("C_MODIFIER not like", value, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierIn(List<String> values) {
            addCriterion("C_MODIFIER in", values, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierNotIn(List<String> values) {
            addCriterion("C_MODIFIER not in", values, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierBetween(String value1, String value2) {
            addCriterion("C_MODIFIER between", value1, value2, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifierNotBetween(String value1, String value2) {
            addCriterion("C_MODIFIER not between", value1, value2, "cModifier");
            return (Criteria) this;
        }

        public Criteria andCModifydateIsNull() {
            addCriterion("C_MODIFYDATE is null");
            return (Criteria) this;
        }

        public Criteria andCModifydateIsNotNull() {
            addCriterion("C_MODIFYDATE is not null");
            return (Criteria) this;
        }

        public Criteria andCModifydateEqualTo(Date value) {
            addCriterionForJDBCDate("C_MODIFYDATE =", value, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_MODIFYDATE <>", value, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateGreaterThan(Date value) {
            addCriterionForJDBCDate("C_MODIFYDATE >", value, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_MODIFYDATE >=", value, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateLessThan(Date value) {
            addCriterionForJDBCDate("C_MODIFYDATE <", value, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_MODIFYDATE <=", value, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateIn(List<Date> values) {
            addCriterionForJDBCDate("C_MODIFYDATE in", values, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_MODIFYDATE not in", values, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_MODIFYDATE between", value1, value2, "cModifydate");
            return (Criteria) this;
        }

        public Criteria andCModifydateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_MODIFYDATE not between", value1, value2, "cModifydate");
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