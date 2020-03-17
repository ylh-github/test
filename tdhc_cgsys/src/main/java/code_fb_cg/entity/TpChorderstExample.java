package code_fb_cg.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TpChorderstExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TpChorderstExample() {
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

        public Criteria andCNoIsNull() {
            addCriterion("C_NO is null");
            return (Criteria) this;
        }

        public Criteria andCNoIsNotNull() {
            addCriterion("C_NO is not null");
            return (Criteria) this;
        }

        public Criteria andCNoEqualTo(String value) {
            addCriterion("C_NO =", value, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoNotEqualTo(String value) {
            addCriterion("C_NO <>", value, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoGreaterThan(String value) {
            addCriterion("C_NO >", value, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoGreaterThanOrEqualTo(String value) {
            addCriterion("C_NO >=", value, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoLessThan(String value) {
            addCriterion("C_NO <", value, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoLessThanOrEqualTo(String value) {
            addCriterion("C_NO <=", value, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoLike(String value) {
            addCriterion("C_NO like", value, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoNotLike(String value) {
            addCriterion("C_NO not like", value, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoIn(List<String> values) {
            addCriterion("C_NO in", values, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoNotIn(List<String> values) {
            addCriterion("C_NO not in", values, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoBetween(String value1, String value2) {
            addCriterion("C_NO between", value1, value2, "cNo");
            return (Criteria) this;
        }

        public Criteria andCNoNotBetween(String value1, String value2) {
            addCriterion("C_NO not between", value1, value2, "cNo");
            return (Criteria) this;
        }

        public Criteria andCMustneedIsNull() {
            addCriterion("C_MUSTNEED is null");
            return (Criteria) this;
        }

        public Criteria andCMustneedIsNotNull() {
            addCriterion("C_MUSTNEED is not null");
            return (Criteria) this;
        }

        public Criteria andCMustneedEqualTo(String value) {
            addCriterion("C_MUSTNEED =", value, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedNotEqualTo(String value) {
            addCriterion("C_MUSTNEED <>", value, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedGreaterThan(String value) {
            addCriterion("C_MUSTNEED >", value, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedGreaterThanOrEqualTo(String value) {
            addCriterion("C_MUSTNEED >=", value, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedLessThan(String value) {
            addCriterion("C_MUSTNEED <", value, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedLessThanOrEqualTo(String value) {
            addCriterion("C_MUSTNEED <=", value, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedLike(String value) {
            addCriterion("C_MUSTNEED like", value, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedNotLike(String value) {
            addCriterion("C_MUSTNEED not like", value, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedIn(List<String> values) {
            addCriterion("C_MUSTNEED in", values, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedNotIn(List<String> values) {
            addCriterion("C_MUSTNEED not in", values, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedBetween(String value1, String value2) {
            addCriterion("C_MUSTNEED between", value1, value2, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCMustneedNotBetween(String value1, String value2) {
            addCriterion("C_MUSTNEED not between", value1, value2, "cMustneed");
            return (Criteria) this;
        }

        public Criteria andCTypenameIsNull() {
            addCriterion("C_TYPENAME is null");
            return (Criteria) this;
        }

        public Criteria andCTypenameIsNotNull() {
            addCriterion("C_TYPENAME is not null");
            return (Criteria) this;
        }

        public Criteria andCTypenameEqualTo(String value) {
            addCriterion("C_TYPENAME =", value, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameNotEqualTo(String value) {
            addCriterion("C_TYPENAME <>", value, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameGreaterThan(String value) {
            addCriterion("C_TYPENAME >", value, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameGreaterThanOrEqualTo(String value) {
            addCriterion("C_TYPENAME >=", value, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameLessThan(String value) {
            addCriterion("C_TYPENAME <", value, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameLessThanOrEqualTo(String value) {
            addCriterion("C_TYPENAME <=", value, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameLike(String value) {
            addCriterion("C_TYPENAME like", value, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameNotLike(String value) {
            addCriterion("C_TYPENAME not like", value, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameIn(List<String> values) {
            addCriterion("C_TYPENAME in", values, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameNotIn(List<String> values) {
            addCriterion("C_TYPENAME not in", values, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameBetween(String value1, String value2) {
            addCriterion("C_TYPENAME between", value1, value2, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCTypenameNotBetween(String value1, String value2) {
            addCriterion("C_TYPENAME not between", value1, value2, "cTypename");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameIsNull() {
            addCriterion("C_GOODSNAME is null");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameIsNotNull() {
            addCriterion("C_GOODSNAME is not null");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameEqualTo(String value) {
            addCriterion("C_GOODSNAME =", value, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameNotEqualTo(String value) {
            addCriterion("C_GOODSNAME <>", value, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameGreaterThan(String value) {
            addCriterion("C_GOODSNAME >", value, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameGreaterThanOrEqualTo(String value) {
            addCriterion("C_GOODSNAME >=", value, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameLessThan(String value) {
            addCriterion("C_GOODSNAME <", value, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameLessThanOrEqualTo(String value) {
            addCriterion("C_GOODSNAME <=", value, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameLike(String value) {
            addCriterion("C_GOODSNAME like", value, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameNotLike(String value) {
            addCriterion("C_GOODSNAME not like", value, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameIn(List<String> values) {
            addCriterion("C_GOODSNAME in", values, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameNotIn(List<String> values) {
            addCriterion("C_GOODSNAME not in", values, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameBetween(String value1, String value2) {
            addCriterion("C_GOODSNAME between", value1, value2, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCGoodsnameNotBetween(String value1, String value2) {
            addCriterion("C_GOODSNAME not between", value1, value2, "cGoodsname");
            return (Criteria) this;
        }

        public Criteria andCSpecIsNull() {
            addCriterion("C_SPEC is null");
            return (Criteria) this;
        }

        public Criteria andCSpecIsNotNull() {
            addCriterion("C_SPEC is not null");
            return (Criteria) this;
        }

        public Criteria andCSpecEqualTo(String value) {
            addCriterion("C_SPEC =", value, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecNotEqualTo(String value) {
            addCriterion("C_SPEC <>", value, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecGreaterThan(String value) {
            addCriterion("C_SPEC >", value, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecGreaterThanOrEqualTo(String value) {
            addCriterion("C_SPEC >=", value, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecLessThan(String value) {
            addCriterion("C_SPEC <", value, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecLessThanOrEqualTo(String value) {
            addCriterion("C_SPEC <=", value, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecLike(String value) {
            addCriterion("C_SPEC like", value, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecNotLike(String value) {
            addCriterion("C_SPEC not like", value, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecIn(List<String> values) {
            addCriterion("C_SPEC in", values, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecNotIn(List<String> values) {
            addCriterion("C_SPEC not in", values, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecBetween(String value1, String value2) {
            addCriterion("C_SPEC between", value1, value2, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCSpecNotBetween(String value1, String value2) {
            addCriterion("C_SPEC not between", value1, value2, "cSpec");
            return (Criteria) this;
        }

        public Criteria andCUnitIsNull() {
            addCriterion("C_UNIT is null");
            return (Criteria) this;
        }

        public Criteria andCUnitIsNotNull() {
            addCriterion("C_UNIT is not null");
            return (Criteria) this;
        }

        public Criteria andCUnitEqualTo(String value) {
            addCriterion("C_UNIT =", value, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitNotEqualTo(String value) {
            addCriterion("C_UNIT <>", value, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitGreaterThan(String value) {
            addCriterion("C_UNIT >", value, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitGreaterThanOrEqualTo(String value) {
            addCriterion("C_UNIT >=", value, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitLessThan(String value) {
            addCriterion("C_UNIT <", value, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitLessThanOrEqualTo(String value) {
            addCriterion("C_UNIT <=", value, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitLike(String value) {
            addCriterion("C_UNIT like", value, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitNotLike(String value) {
            addCriterion("C_UNIT not like", value, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitIn(List<String> values) {
            addCriterion("C_UNIT in", values, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitNotIn(List<String> values) {
            addCriterion("C_UNIT not in", values, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitBetween(String value1, String value2) {
            addCriterion("C_UNIT between", value1, value2, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCUnitNotBetween(String value1, String value2) {
            addCriterion("C_UNIT not between", value1, value2, "cUnit");
            return (Criteria) this;
        }

        public Criteria andCNumIsNull() {
            addCriterion("C_NUM is null");
            return (Criteria) this;
        }

        public Criteria andCNumIsNotNull() {
            addCriterion("C_NUM is not null");
            return (Criteria) this;
        }

        public Criteria andCNumEqualTo(String value) {
            addCriterion("C_NUM =", value, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumNotEqualTo(String value) {
            addCriterion("C_NUM <>", value, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumGreaterThan(String value) {
            addCriterion("C_NUM >", value, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumGreaterThanOrEqualTo(String value) {
            addCriterion("C_NUM >=", value, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumLessThan(String value) {
            addCriterion("C_NUM <", value, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumLessThanOrEqualTo(String value) {
            addCriterion("C_NUM <=", value, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumLike(String value) {
            addCriterion("C_NUM like", value, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumNotLike(String value) {
            addCriterion("C_NUM not like", value, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumIn(List<String> values) {
            addCriterion("C_NUM in", values, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumNotIn(List<String> values) {
            addCriterion("C_NUM not in", values, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumBetween(String value1, String value2) {
            addCriterion("C_NUM between", value1, value2, "cNum");
            return (Criteria) this;
        }

        public Criteria andCNumNotBetween(String value1, String value2) {
            addCriterion("C_NUM not between", value1, value2, "cNum");
            return (Criteria) this;
        }

        public Criteria andCArrtimeIsNull() {
            addCriterion("C_ARRTIME is null");
            return (Criteria) this;
        }

        public Criteria andCArrtimeIsNotNull() {
            addCriterion("C_ARRTIME is not null");
            return (Criteria) this;
        }

        public Criteria andCArrtimeEqualTo(String value) {
            addCriterion("C_ARRTIME =", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeNotEqualTo(String value) {
            addCriterion("C_ARRTIME <>", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeGreaterThan(String value) {
            addCriterion("C_ARRTIME >", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeGreaterThanOrEqualTo(String value) {
            addCriterion("C_ARRTIME >=", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeLessThan(String value) {
            addCriterion("C_ARRTIME <", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeLessThanOrEqualTo(String value) {
            addCriterion("C_ARRTIME <=", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeLike(String value) {
            addCriterion("C_ARRTIME like", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeNotLike(String value) {
            addCriterion("C_ARRTIME not like", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeIn(List<String> values) {
            addCriterion("C_ARRTIME in", values, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeNotIn(List<String> values) {
            addCriterion("C_ARRTIME not in", values, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeBetween(String value1, String value2) {
            addCriterion("C_ARRTIME between", value1, value2, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeNotBetween(String value1, String value2) {
            addCriterion("C_ARRTIME not between", value1, value2, "cArrtime");
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

        public Criteria andCModifytimeIsNull() {
            addCriterion("C_MODIFYTIME is null");
            return (Criteria) this;
        }

        public Criteria andCModifytimeIsNotNull() {
            addCriterion("C_MODIFYTIME is not null");
            return (Criteria) this;
        }

        public Criteria andCModifytimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_MODIFYTIME =", value, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_MODIFYTIME <>", value, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_MODIFYTIME >", value, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_MODIFYTIME >=", value, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeLessThan(Date value) {
            addCriterionForJDBCDate("C_MODIFYTIME <", value, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_MODIFYTIME <=", value, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_MODIFYTIME in", values, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_MODIFYTIME not in", values, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_MODIFYTIME between", value1, value2, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCModifytimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_MODIFYTIME not between", value1, value2, "cModifytime");
            return (Criteria) this;
        }

        public Criteria andCRemarkIsNull() {
            addCriterion("C_REMARK is null");
            return (Criteria) this;
        }

        public Criteria andCRemarkIsNotNull() {
            addCriterion("C_REMARK is not null");
            return (Criteria) this;
        }

        public Criteria andCRemarkEqualTo(String value) {
            addCriterion("C_REMARK =", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkNotEqualTo(String value) {
            addCriterion("C_REMARK <>", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkGreaterThan(String value) {
            addCriterion("C_REMARK >", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkGreaterThanOrEqualTo(String value) {
            addCriterion("C_REMARK >=", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkLessThan(String value) {
            addCriterion("C_REMARK <", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkLessThanOrEqualTo(String value) {
            addCriterion("C_REMARK <=", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkLike(String value) {
            addCriterion("C_REMARK like", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkNotLike(String value) {
            addCriterion("C_REMARK not like", value, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkIn(List<String> values) {
            addCriterion("C_REMARK in", values, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkNotIn(List<String> values) {
            addCriterion("C_REMARK not in", values, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkBetween(String value1, String value2) {
            addCriterion("C_REMARK between", value1, value2, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCRemarkNotBetween(String value1, String value2) {
            addCriterion("C_REMARK not between", value1, value2, "cRemark");
            return (Criteria) this;
        }

        public Criteria andCStateIsNull() {
            addCriterion("C_STATE is null");
            return (Criteria) this;
        }

        public Criteria andCStateIsNotNull() {
            addCriterion("C_STATE is not null");
            return (Criteria) this;
        }

        public Criteria andCStateEqualTo(String value) {
            addCriterion("C_STATE =", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateNotEqualTo(String value) {
            addCriterion("C_STATE <>", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateGreaterThan(String value) {
            addCriterion("C_STATE >", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateGreaterThanOrEqualTo(String value) {
            addCriterion("C_STATE >=", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateLessThan(String value) {
            addCriterion("C_STATE <", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateLessThanOrEqualTo(String value) {
            addCriterion("C_STATE <=", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateLike(String value) {
            addCriterion("C_STATE like", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateNotLike(String value) {
            addCriterion("C_STATE not like", value, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateIn(List<String> values) {
            addCriterion("C_STATE in", values, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateNotIn(List<String> values) {
            addCriterion("C_STATE not in", values, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateBetween(String value1, String value2) {
            addCriterion("C_STATE between", value1, value2, "cState");
            return (Criteria) this;
        }

        public Criteria andCStateNotBetween(String value1, String value2) {
            addCriterion("C_STATE not between", value1, value2, "cState");
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

        public Criteria andCOrdeallineIsNull() {
            addCriterion("C_ORDEALLINE is null");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineIsNotNull() {
            addCriterion("C_ORDEALLINE is not null");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineEqualTo(Date value) {
            addCriterionForJDBCDate("C_ORDEALLINE =", value, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_ORDEALLINE <>", value, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineGreaterThan(Date value) {
            addCriterionForJDBCDate("C_ORDEALLINE >", value, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_ORDEALLINE >=", value, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineLessThan(Date value) {
            addCriterionForJDBCDate("C_ORDEALLINE <", value, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_ORDEALLINE <=", value, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineIn(List<Date> values) {
            addCriterionForJDBCDate("C_ORDEALLINE in", values, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_ORDEALLINE not in", values, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_ORDEALLINE between", value1, value2, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCOrdeallineNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_ORDEALLINE not between", value1, value2, "cOrdealline");
            return (Criteria) this;
        }

        public Criteria andCDeptorIsNull() {
            addCriterion("C_DEPTOR is null");
            return (Criteria) this;
        }

        public Criteria andCDeptorIsNotNull() {
            addCriterion("C_DEPTOR is not null");
            return (Criteria) this;
        }

        public Criteria andCDeptorEqualTo(String value) {
            addCriterion("C_DEPTOR =", value, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorNotEqualTo(String value) {
            addCriterion("C_DEPTOR <>", value, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorGreaterThan(String value) {
            addCriterion("C_DEPTOR >", value, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorGreaterThanOrEqualTo(String value) {
            addCriterion("C_DEPTOR >=", value, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorLessThan(String value) {
            addCriterion("C_DEPTOR <", value, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorLessThanOrEqualTo(String value) {
            addCriterion("C_DEPTOR <=", value, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorLike(String value) {
            addCriterion("C_DEPTOR like", value, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorNotLike(String value) {
            addCriterion("C_DEPTOR not like", value, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorIn(List<String> values) {
            addCriterion("C_DEPTOR in", values, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorNotIn(List<String> values) {
            addCriterion("C_DEPTOR not in", values, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorBetween(String value1, String value2) {
            addCriterion("C_DEPTOR between", value1, value2, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCDeptorNotBetween(String value1, String value2) {
            addCriterion("C_DEPTOR not between", value1, value2, "cDeptor");
            return (Criteria) this;
        }

        public Criteria andCManorIsNull() {
            addCriterion("C_MANOR is null");
            return (Criteria) this;
        }

        public Criteria andCManorIsNotNull() {
            addCriterion("C_MANOR is not null");
            return (Criteria) this;
        }

        public Criteria andCManorEqualTo(String value) {
            addCriterion("C_MANOR =", value, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorNotEqualTo(String value) {
            addCriterion("C_MANOR <>", value, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorGreaterThan(String value) {
            addCriterion("C_MANOR >", value, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorGreaterThanOrEqualTo(String value) {
            addCriterion("C_MANOR >=", value, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorLessThan(String value) {
            addCriterion("C_MANOR <", value, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorLessThanOrEqualTo(String value) {
            addCriterion("C_MANOR <=", value, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorLike(String value) {
            addCriterion("C_MANOR like", value, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorNotLike(String value) {
            addCriterion("C_MANOR not like", value, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorIn(List<String> values) {
            addCriterion("C_MANOR in", values, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorNotIn(List<String> values) {
            addCriterion("C_MANOR not in", values, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorBetween(String value1, String value2) {
            addCriterion("C_MANOR between", value1, value2, "cManor");
            return (Criteria) this;
        }

        public Criteria andCManorNotBetween(String value1, String value2) {
            addCriterion("C_MANOR not between", value1, value2, "cManor");
            return (Criteria) this;
        }

        public Criteria andCPhoneIsNull() {
            addCriterion("C_PHONE is null");
            return (Criteria) this;
        }

        public Criteria andCPhoneIsNotNull() {
            addCriterion("C_PHONE is not null");
            return (Criteria) this;
        }

        public Criteria andCPhoneEqualTo(String value) {
            addCriterion("C_PHONE =", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneNotEqualTo(String value) {
            addCriterion("C_PHONE <>", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneGreaterThan(String value) {
            addCriterion("C_PHONE >", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("C_PHONE >=", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneLessThan(String value) {
            addCriterion("C_PHONE <", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneLessThanOrEqualTo(String value) {
            addCriterion("C_PHONE <=", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneLike(String value) {
            addCriterion("C_PHONE like", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneNotLike(String value) {
            addCriterion("C_PHONE not like", value, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneIn(List<String> values) {
            addCriterion("C_PHONE in", values, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneNotIn(List<String> values) {
            addCriterion("C_PHONE not in", values, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneBetween(String value1, String value2) {
            addCriterion("C_PHONE between", value1, value2, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCPhoneNotBetween(String value1, String value2) {
            addCriterion("C_PHONE not between", value1, value2, "cPhone");
            return (Criteria) this;
        }

        public Criteria andCAllotstateIsNull() {
            addCriterion("C_ALLOTSTATE is null");
            return (Criteria) this;
        }

        public Criteria andCAllotstateIsNotNull() {
            addCriterion("C_ALLOTSTATE is not null");
            return (Criteria) this;
        }

        public Criteria andCAllotstateEqualTo(String value) {
            addCriterion("C_ALLOTSTATE =", value, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateNotEqualTo(String value) {
            addCriterion("C_ALLOTSTATE <>", value, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateGreaterThan(String value) {
            addCriterion("C_ALLOTSTATE >", value, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateGreaterThanOrEqualTo(String value) {
            addCriterion("C_ALLOTSTATE >=", value, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateLessThan(String value) {
            addCriterion("C_ALLOTSTATE <", value, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateLessThanOrEqualTo(String value) {
            addCriterion("C_ALLOTSTATE <=", value, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateLike(String value) {
            addCriterion("C_ALLOTSTATE like", value, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateNotLike(String value) {
            addCriterion("C_ALLOTSTATE not like", value, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateIn(List<String> values) {
            addCriterion("C_ALLOTSTATE in", values, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateNotIn(List<String> values) {
            addCriterion("C_ALLOTSTATE not in", values, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateBetween(String value1, String value2) {
            addCriterion("C_ALLOTSTATE between", value1, value2, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotstateNotBetween(String value1, String value2) {
            addCriterion("C_ALLOTSTATE not between", value1, value2, "cAllotstate");
            return (Criteria) this;
        }

        public Criteria andCAllotmanIsNull() {
            addCriterion("C_ALLOTMAN is null");
            return (Criteria) this;
        }

        public Criteria andCAllotmanIsNotNull() {
            addCriterion("C_ALLOTMAN is not null");
            return (Criteria) this;
        }

        public Criteria andCAllotmanEqualTo(String value) {
            addCriterion("C_ALLOTMAN =", value, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanNotEqualTo(String value) {
            addCriterion("C_ALLOTMAN <>", value, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanGreaterThan(String value) {
            addCriterion("C_ALLOTMAN >", value, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanGreaterThanOrEqualTo(String value) {
            addCriterion("C_ALLOTMAN >=", value, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanLessThan(String value) {
            addCriterion("C_ALLOTMAN <", value, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanLessThanOrEqualTo(String value) {
            addCriterion("C_ALLOTMAN <=", value, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanLike(String value) {
            addCriterion("C_ALLOTMAN like", value, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanNotLike(String value) {
            addCriterion("C_ALLOTMAN not like", value, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanIn(List<String> values) {
            addCriterion("C_ALLOTMAN in", values, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanNotIn(List<String> values) {
            addCriterion("C_ALLOTMAN not in", values, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanBetween(String value1, String value2) {
            addCriterion("C_ALLOTMAN between", value1, value2, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllotmanNotBetween(String value1, String value2) {
            addCriterion("C_ALLOTMAN not between", value1, value2, "cAllotman");
            return (Criteria) this;
        }

        public Criteria andCAllottimeIsNull() {
            addCriterion("C_ALLOTTIME is null");
            return (Criteria) this;
        }

        public Criteria andCAllottimeIsNotNull() {
            addCriterion("C_ALLOTTIME is not null");
            return (Criteria) this;
        }

        public Criteria andCAllottimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_ALLOTTIME =", value, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_ALLOTTIME <>", value, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_ALLOTTIME >", value, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_ALLOTTIME >=", value, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeLessThan(Date value) {
            addCriterionForJDBCDate("C_ALLOTTIME <", value, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_ALLOTTIME <=", value, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_ALLOTTIME in", values, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_ALLOTTIME not in", values, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_ALLOTTIME between", value1, value2, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCAllottimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_ALLOTTIME not between", value1, value2, "cAllottime");
            return (Criteria) this;
        }

        public Criteria andCPlanorIsNull() {
            addCriterion("C_PLANOR is null");
            return (Criteria) this;
        }

        public Criteria andCPlanorIsNotNull() {
            addCriterion("C_PLANOR is not null");
            return (Criteria) this;
        }

        public Criteria andCPlanorEqualTo(String value) {
            addCriterion("C_PLANOR =", value, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorNotEqualTo(String value) {
            addCriterion("C_PLANOR <>", value, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorGreaterThan(String value) {
            addCriterion("C_PLANOR >", value, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorGreaterThanOrEqualTo(String value) {
            addCriterion("C_PLANOR >=", value, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorLessThan(String value) {
            addCriterion("C_PLANOR <", value, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorLessThanOrEqualTo(String value) {
            addCriterion("C_PLANOR <=", value, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorLike(String value) {
            addCriterion("C_PLANOR like", value, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorNotLike(String value) {
            addCriterion("C_PLANOR not like", value, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorIn(List<String> values) {
            addCriterion("C_PLANOR in", values, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorNotIn(List<String> values) {
            addCriterion("C_PLANOR not in", values, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorBetween(String value1, String value2) {
            addCriterion("C_PLANOR between", value1, value2, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPlanorNotBetween(String value1, String value2) {
            addCriterion("C_PLANOR not between", value1, value2, "cPlanor");
            return (Criteria) this;
        }

        public Criteria andCPolitimeIsNull() {
            addCriterion("C_POLITIME is null");
            return (Criteria) this;
        }

        public Criteria andCPolitimeIsNotNull() {
            addCriterion("C_POLITIME is not null");
            return (Criteria) this;
        }

        public Criteria andCPolitimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_POLITIME =", value, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_POLITIME <>", value, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_POLITIME >", value, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_POLITIME >=", value, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeLessThan(Date value) {
            addCriterionForJDBCDate("C_POLITIME <", value, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_POLITIME <=", value, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_POLITIME in", values, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_POLITIME not in", values, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_POLITIME between", value1, value2, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolitimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_POLITIME not between", value1, value2, "cPolitime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeIsNull() {
            addCriterion("C_POLINORMTIME is null");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeIsNotNull() {
            addCriterion("C_POLINORMTIME is not null");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeEqualTo(String value) {
            addCriterion("C_POLINORMTIME =", value, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeNotEqualTo(String value) {
            addCriterion("C_POLINORMTIME <>", value, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeGreaterThan(String value) {
            addCriterion("C_POLINORMTIME >", value, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeGreaterThanOrEqualTo(String value) {
            addCriterion("C_POLINORMTIME >=", value, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeLessThan(String value) {
            addCriterion("C_POLINORMTIME <", value, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeLessThanOrEqualTo(String value) {
            addCriterion("C_POLINORMTIME <=", value, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeLike(String value) {
            addCriterion("C_POLINORMTIME like", value, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeNotLike(String value) {
            addCriterion("C_POLINORMTIME not like", value, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeIn(List<String> values) {
            addCriterion("C_POLINORMTIME in", values, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeNotIn(List<String> values) {
            addCriterion("C_POLINORMTIME not in", values, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeBetween(String value1, String value2) {
            addCriterion("C_POLINORMTIME between", value1, value2, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCPolinormtimeNotBetween(String value1, String value2) {
            addCriterion("C_POLINORMTIME not between", value1, value2, "cPolinormtime");
            return (Criteria) this;
        }

        public Criteria andCMtidIsNull() {
            addCriterion("C_MTID is null");
            return (Criteria) this;
        }

        public Criteria andCMtidIsNotNull() {
            addCriterion("C_MTID is not null");
            return (Criteria) this;
        }

        public Criteria andCMtidEqualTo(String value) {
            addCriterion("C_MTID =", value, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidNotEqualTo(String value) {
            addCriterion("C_MTID <>", value, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidGreaterThan(String value) {
            addCriterion("C_MTID >", value, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidGreaterThanOrEqualTo(String value) {
            addCriterion("C_MTID >=", value, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidLessThan(String value) {
            addCriterion("C_MTID <", value, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidLessThanOrEqualTo(String value) {
            addCriterion("C_MTID <=", value, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidLike(String value) {
            addCriterion("C_MTID like", value, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidNotLike(String value) {
            addCriterion("C_MTID not like", value, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidIn(List<String> values) {
            addCriterion("C_MTID in", values, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidNotIn(List<String> values) {
            addCriterion("C_MTID not in", values, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidBetween(String value1, String value2) {
            addCriterion("C_MTID between", value1, value2, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCMtidNotBetween(String value1, String value2) {
            addCriterion("C_MTID not between", value1, value2, "cMtid");
            return (Criteria) this;
        }

        public Criteria andCPlantimeIsNull() {
            addCriterion("C_PLANTIME is null");
            return (Criteria) this;
        }

        public Criteria andCPlantimeIsNotNull() {
            addCriterion("C_PLANTIME is not null");
            return (Criteria) this;
        }

        public Criteria andCPlantimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_PLANTIME =", value, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_PLANTIME <>", value, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_PLANTIME >", value, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_PLANTIME >=", value, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeLessThan(Date value) {
            addCriterionForJDBCDate("C_PLANTIME <", value, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_PLANTIME <=", value, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_PLANTIME in", values, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_PLANTIME not in", values, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_PLANTIME between", value1, value2, "cPlantime");
            return (Criteria) this;
        }

        public Criteria andCPlantimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_PLANTIME not between", value1, value2, "cPlantime");
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