package code_fb_cg.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TbSuppmateralExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TbSuppmateralExample() {
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

        public Criteria andCTotalnumIsNull() {
            addCriterion("C_TOTALNUM is null");
            return (Criteria) this;
        }

        public Criteria andCTotalnumIsNotNull() {
            addCriterion("C_TOTALNUM is not null");
            return (Criteria) this;
        }

        public Criteria andCTotalnumEqualTo(String value) {
            addCriterion("C_TOTALNUM =", value, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumNotEqualTo(String value) {
            addCriterion("C_TOTALNUM <>", value, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumGreaterThan(String value) {
            addCriterion("C_TOTALNUM >", value, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumGreaterThanOrEqualTo(String value) {
            addCriterion("C_TOTALNUM >=", value, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumLessThan(String value) {
            addCriterion("C_TOTALNUM <", value, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumLessThanOrEqualTo(String value) {
            addCriterion("C_TOTALNUM <=", value, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumLike(String value) {
            addCriterion("C_TOTALNUM like", value, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumNotLike(String value) {
            addCriterion("C_TOTALNUM not like", value, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumIn(List<String> values) {
            addCriterion("C_TOTALNUM in", values, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumNotIn(List<String> values) {
            addCriterion("C_TOTALNUM not in", values, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumBetween(String value1, String value2) {
            addCriterion("C_TOTALNUM between", value1, value2, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCTotalnumNotBetween(String value1, String value2) {
            addCriterion("C_TOTALNUM not between", value1, value2, "cTotalnum");
            return (Criteria) this;
        }

        public Criteria andCConnumIsNull() {
            addCriterion("C_CONNUM is null");
            return (Criteria) this;
        }

        public Criteria andCConnumIsNotNull() {
            addCriterion("C_CONNUM is not null");
            return (Criteria) this;
        }

        public Criteria andCConnumEqualTo(String value) {
            addCriterion("C_CONNUM =", value, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumNotEqualTo(String value) {
            addCriterion("C_CONNUM <>", value, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumGreaterThan(String value) {
            addCriterion("C_CONNUM >", value, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumGreaterThanOrEqualTo(String value) {
            addCriterion("C_CONNUM >=", value, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumLessThan(String value) {
            addCriterion("C_CONNUM <", value, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumLessThanOrEqualTo(String value) {
            addCriterion("C_CONNUM <=", value, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumLike(String value) {
            addCriterion("C_CONNUM like", value, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumNotLike(String value) {
            addCriterion("C_CONNUM not like", value, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumIn(List<String> values) {
            addCriterion("C_CONNUM in", values, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumNotIn(List<String> values) {
            addCriterion("C_CONNUM not in", values, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumBetween(String value1, String value2) {
            addCriterion("C_CONNUM between", value1, value2, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCConnumNotBetween(String value1, String value2) {
            addCriterion("C_CONNUM not between", value1, value2, "cConnum");
            return (Criteria) this;
        }

        public Criteria andCReceivcompIsNull() {
            addCriterion("C_RECEIVCOMP is null");
            return (Criteria) this;
        }

        public Criteria andCReceivcompIsNotNull() {
            addCriterion("C_RECEIVCOMP is not null");
            return (Criteria) this;
        }

        public Criteria andCReceivcompEqualTo(String value) {
            addCriterion("C_RECEIVCOMP =", value, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompNotEqualTo(String value) {
            addCriterion("C_RECEIVCOMP <>", value, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompGreaterThan(String value) {
            addCriterion("C_RECEIVCOMP >", value, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompGreaterThanOrEqualTo(String value) {
            addCriterion("C_RECEIVCOMP >=", value, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompLessThan(String value) {
            addCriterion("C_RECEIVCOMP <", value, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompLessThanOrEqualTo(String value) {
            addCriterion("C_RECEIVCOMP <=", value, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompLike(String value) {
            addCriterion("C_RECEIVCOMP like", value, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompNotLike(String value) {
            addCriterion("C_RECEIVCOMP not like", value, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompIn(List<String> values) {
            addCriterion("C_RECEIVCOMP in", values, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompNotIn(List<String> values) {
            addCriterion("C_RECEIVCOMP not in", values, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompBetween(String value1, String value2) {
            addCriterion("C_RECEIVCOMP between", value1, value2, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceivcompNotBetween(String value1, String value2) {
            addCriterion("C_RECEIVCOMP not between", value1, value2, "cReceivcomp");
            return (Criteria) this;
        }

        public Criteria andCReceaddressIsNull() {
            addCriterion("C_RECEADDRESS is null");
            return (Criteria) this;
        }

        public Criteria andCReceaddressIsNotNull() {
            addCriterion("C_RECEADDRESS is not null");
            return (Criteria) this;
        }

        public Criteria andCReceaddressEqualTo(String value) {
            addCriterion("C_RECEADDRESS =", value, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressNotEqualTo(String value) {
            addCriterion("C_RECEADDRESS <>", value, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressGreaterThan(String value) {
            addCriterion("C_RECEADDRESS >", value, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressGreaterThanOrEqualTo(String value) {
            addCriterion("C_RECEADDRESS >=", value, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressLessThan(String value) {
            addCriterion("C_RECEADDRESS <", value, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressLessThanOrEqualTo(String value) {
            addCriterion("C_RECEADDRESS <=", value, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressLike(String value) {
            addCriterion("C_RECEADDRESS like", value, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressNotLike(String value) {
            addCriterion("C_RECEADDRESS not like", value, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressIn(List<String> values) {
            addCriterion("C_RECEADDRESS in", values, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressNotIn(List<String> values) {
            addCriterion("C_RECEADDRESS not in", values, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressBetween(String value1, String value2) {
            addCriterion("C_RECEADDRESS between", value1, value2, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCReceaddressNotBetween(String value1, String value2) {
            addCriterion("C_RECEADDRESS not between", value1, value2, "cReceaddress");
            return (Criteria) this;
        }

        public Criteria andCContacterIsNull() {
            addCriterion("C_CONTACTER is null");
            return (Criteria) this;
        }

        public Criteria andCContacterIsNotNull() {
            addCriterion("C_CONTACTER is not null");
            return (Criteria) this;
        }

        public Criteria andCContacterEqualTo(String value) {
            addCriterion("C_CONTACTER =", value, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterNotEqualTo(String value) {
            addCriterion("C_CONTACTER <>", value, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterGreaterThan(String value) {
            addCriterion("C_CONTACTER >", value, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterGreaterThanOrEqualTo(String value) {
            addCriterion("C_CONTACTER >=", value, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterLessThan(String value) {
            addCriterion("C_CONTACTER <", value, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterLessThanOrEqualTo(String value) {
            addCriterion("C_CONTACTER <=", value, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterLike(String value) {
            addCriterion("C_CONTACTER like", value, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterNotLike(String value) {
            addCriterion("C_CONTACTER not like", value, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterIn(List<String> values) {
            addCriterion("C_CONTACTER in", values, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterNotIn(List<String> values) {
            addCriterion("C_CONTACTER not in", values, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterBetween(String value1, String value2) {
            addCriterion("C_CONTACTER between", value1, value2, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacterNotBetween(String value1, String value2) {
            addCriterion("C_CONTACTER not between", value1, value2, "cContacter");
            return (Criteria) this;
        }

        public Criteria andCContacttellIsNull() {
            addCriterion("C_CONTACTTELL is null");
            return (Criteria) this;
        }

        public Criteria andCContacttellIsNotNull() {
            addCriterion("C_CONTACTTELL is not null");
            return (Criteria) this;
        }

        public Criteria andCContacttellEqualTo(String value) {
            addCriterion("C_CONTACTTELL =", value, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellNotEqualTo(String value) {
            addCriterion("C_CONTACTTELL <>", value, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellGreaterThan(String value) {
            addCriterion("C_CONTACTTELL >", value, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellGreaterThanOrEqualTo(String value) {
            addCriterion("C_CONTACTTELL >=", value, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellLessThan(String value) {
            addCriterion("C_CONTACTTELL <", value, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellLessThanOrEqualTo(String value) {
            addCriterion("C_CONTACTTELL <=", value, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellLike(String value) {
            addCriterion("C_CONTACTTELL like", value, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellNotLike(String value) {
            addCriterion("C_CONTACTTELL not like", value, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellIn(List<String> values) {
            addCriterion("C_CONTACTTELL in", values, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellNotIn(List<String> values) {
            addCriterion("C_CONTACTTELL not in", values, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellBetween(String value1, String value2) {
            addCriterion("C_CONTACTTELL between", value1, value2, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCContacttellNotBetween(String value1, String value2) {
            addCriterion("C_CONTACTTELL not between", value1, value2, "cContacttell");
            return (Criteria) this;
        }

        public Criteria andCOrdernumIsNull() {
            addCriterion("C_ORDERNUM is null");
            return (Criteria) this;
        }

        public Criteria andCOrdernumIsNotNull() {
            addCriterion("C_ORDERNUM is not null");
            return (Criteria) this;
        }

        public Criteria andCOrdernumEqualTo(String value) {
            addCriterion("C_ORDERNUM =", value, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumNotEqualTo(String value) {
            addCriterion("C_ORDERNUM <>", value, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumGreaterThan(String value) {
            addCriterion("C_ORDERNUM >", value, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumGreaterThanOrEqualTo(String value) {
            addCriterion("C_ORDERNUM >=", value, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumLessThan(String value) {
            addCriterion("C_ORDERNUM <", value, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumLessThanOrEqualTo(String value) {
            addCriterion("C_ORDERNUM <=", value, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumLike(String value) {
            addCriterion("C_ORDERNUM like", value, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumNotLike(String value) {
            addCriterion("C_ORDERNUM not like", value, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumIn(List<String> values) {
            addCriterion("C_ORDERNUM in", values, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumNotIn(List<String> values) {
            addCriterion("C_ORDERNUM not in", values, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumBetween(String value1, String value2) {
            addCriterion("C_ORDERNUM between", value1, value2, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCOrdernumNotBetween(String value1, String value2) {
            addCriterion("C_ORDERNUM not between", value1, value2, "cOrdernum");
            return (Criteria) this;
        }

        public Criteria andCSendtimeIsNull() {
            addCriterion("C_SENDTIME is null");
            return (Criteria) this;
        }

        public Criteria andCSendtimeIsNotNull() {
            addCriterion("C_SENDTIME is not null");
            return (Criteria) this;
        }

        public Criteria andCSendtimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_SENDTIME =", value, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_SENDTIME <>", value, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_SENDTIME >", value, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_SENDTIME >=", value, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeLessThan(Date value) {
            addCriterionForJDBCDate("C_SENDTIME <", value, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_SENDTIME <=", value, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_SENDTIME in", values, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_SENDTIME not in", values, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_SENDTIME between", value1, value2, "cSendtime");
            return (Criteria) this;
        }

        public Criteria andCSendtimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_SENDTIME not between", value1, value2, "cSendtime");
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

        public Criteria andCArrtimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_ARRTIME =", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_ARRTIME <>", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_ARRTIME >", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_ARRTIME >=", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeLessThan(Date value) {
            addCriterionForJDBCDate("C_ARRTIME <", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_ARRTIME <=", value, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_ARRTIME in", values, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_ARRTIME not in", values, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_ARRTIME between", value1, value2, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCArrtimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_ARRTIME not between", value1, value2, "cArrtime");
            return (Criteria) this;
        }

        public Criteria andCSenderIsNull() {
            addCriterion("C_SENDER is null");
            return (Criteria) this;
        }

        public Criteria andCSenderIsNotNull() {
            addCriterion("C_SENDER is not null");
            return (Criteria) this;
        }

        public Criteria andCSenderEqualTo(String value) {
            addCriterion("C_SENDER =", value, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderNotEqualTo(String value) {
            addCriterion("C_SENDER <>", value, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderGreaterThan(String value) {
            addCriterion("C_SENDER >", value, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderGreaterThanOrEqualTo(String value) {
            addCriterion("C_SENDER >=", value, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderLessThan(String value) {
            addCriterion("C_SENDER <", value, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderLessThanOrEqualTo(String value) {
            addCriterion("C_SENDER <=", value, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderLike(String value) {
            addCriterion("C_SENDER like", value, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderNotLike(String value) {
            addCriterion("C_SENDER not like", value, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderIn(List<String> values) {
            addCriterion("C_SENDER in", values, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderNotIn(List<String> values) {
            addCriterion("C_SENDER not in", values, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderBetween(String value1, String value2) {
            addCriterion("C_SENDER between", value1, value2, "cSender");
            return (Criteria) this;
        }

        public Criteria andCSenderNotBetween(String value1, String value2) {
            addCriterion("C_SENDER not between", value1, value2, "cSender");
            return (Criteria) this;
        }

        public Criteria andCReceiverIsNull() {
            addCriterion("C_RECEIVER is null");
            return (Criteria) this;
        }

        public Criteria andCReceiverIsNotNull() {
            addCriterion("C_RECEIVER is not null");
            return (Criteria) this;
        }

        public Criteria andCReceiverEqualTo(String value) {
            addCriterion("C_RECEIVER =", value, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverNotEqualTo(String value) {
            addCriterion("C_RECEIVER <>", value, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverGreaterThan(String value) {
            addCriterion("C_RECEIVER >", value, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverGreaterThanOrEqualTo(String value) {
            addCriterion("C_RECEIVER >=", value, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverLessThan(String value) {
            addCriterion("C_RECEIVER <", value, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverLessThanOrEqualTo(String value) {
            addCriterion("C_RECEIVER <=", value, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverLike(String value) {
            addCriterion("C_RECEIVER like", value, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverNotLike(String value) {
            addCriterion("C_RECEIVER not like", value, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverIn(List<String> values) {
            addCriterion("C_RECEIVER in", values, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverNotIn(List<String> values) {
            addCriterion("C_RECEIVER not in", values, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverBetween(String value1, String value2) {
            addCriterion("C_RECEIVER between", value1, value2, "cReceiver");
            return (Criteria) this;
        }

        public Criteria andCReceiverNotBetween(String value1, String value2) {
            addCriterion("C_RECEIVER not between", value1, value2, "cReceiver");
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

        public Criteria andCContacterrIsNull() {
            addCriterion("C_CONTACTERR is null");
            return (Criteria) this;
        }

        public Criteria andCContacterrIsNotNull() {
            addCriterion("C_CONTACTERR is not null");
            return (Criteria) this;
        }

        public Criteria andCContacterrEqualTo(String value) {
            addCriterion("C_CONTACTERR =", value, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrNotEqualTo(String value) {
            addCriterion("C_CONTACTERR <>", value, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrGreaterThan(String value) {
            addCriterion("C_CONTACTERR >", value, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrGreaterThanOrEqualTo(String value) {
            addCriterion("C_CONTACTERR >=", value, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrLessThan(String value) {
            addCriterion("C_CONTACTERR <", value, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrLessThanOrEqualTo(String value) {
            addCriterion("C_CONTACTERR <=", value, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrLike(String value) {
            addCriterion("C_CONTACTERR like", value, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrNotLike(String value) {
            addCriterion("C_CONTACTERR not like", value, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrIn(List<String> values) {
            addCriterion("C_CONTACTERR in", values, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrNotIn(List<String> values) {
            addCriterion("C_CONTACTERR not in", values, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrBetween(String value1, String value2) {
            addCriterion("C_CONTACTERR between", value1, value2, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContacterrNotBetween(String value1, String value2) {
            addCriterion("C_CONTACTERR not between", value1, value2, "cContacterr");
            return (Criteria) this;
        }

        public Criteria andCContphoneIsNull() {
            addCriterion("C_CONTPHONE is null");
            return (Criteria) this;
        }

        public Criteria andCContphoneIsNotNull() {
            addCriterion("C_CONTPHONE is not null");
            return (Criteria) this;
        }

        public Criteria andCContphoneEqualTo(String value) {
            addCriterion("C_CONTPHONE =", value, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneNotEqualTo(String value) {
            addCriterion("C_CONTPHONE <>", value, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneGreaterThan(String value) {
            addCriterion("C_CONTPHONE >", value, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneGreaterThanOrEqualTo(String value) {
            addCriterion("C_CONTPHONE >=", value, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneLessThan(String value) {
            addCriterion("C_CONTPHONE <", value, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneLessThanOrEqualTo(String value) {
            addCriterion("C_CONTPHONE <=", value, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneLike(String value) {
            addCriterion("C_CONTPHONE like", value, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneNotLike(String value) {
            addCriterion("C_CONTPHONE not like", value, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneIn(List<String> values) {
            addCriterion("C_CONTPHONE in", values, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneNotIn(List<String> values) {
            addCriterion("C_CONTPHONE not in", values, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneBetween(String value1, String value2) {
            addCriterion("C_CONTPHONE between", value1, value2, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCContphoneNotBetween(String value1, String value2) {
            addCriterion("C_CONTPHONE not between", value1, value2, "cContphone");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameIsNull() {
            addCriterion("C_ACUGOODSNAME is null");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameIsNotNull() {
            addCriterion("C_ACUGOODSNAME is not null");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameEqualTo(String value) {
            addCriterion("C_ACUGOODSNAME =", value, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameNotEqualTo(String value) {
            addCriterion("C_ACUGOODSNAME <>", value, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameGreaterThan(String value) {
            addCriterion("C_ACUGOODSNAME >", value, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameGreaterThanOrEqualTo(String value) {
            addCriterion("C_ACUGOODSNAME >=", value, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameLessThan(String value) {
            addCriterion("C_ACUGOODSNAME <", value, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameLessThanOrEqualTo(String value) {
            addCriterion("C_ACUGOODSNAME <=", value, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameLike(String value) {
            addCriterion("C_ACUGOODSNAME like", value, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameNotLike(String value) {
            addCriterion("C_ACUGOODSNAME not like", value, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameIn(List<String> values) {
            addCriterion("C_ACUGOODSNAME in", values, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameNotIn(List<String> values) {
            addCriterion("C_ACUGOODSNAME not in", values, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameBetween(String value1, String value2) {
            addCriterion("C_ACUGOODSNAME between", value1, value2, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcugoodsnameNotBetween(String value1, String value2) {
            addCriterion("C_ACUGOODSNAME not between", value1, value2, "cAcugoodsname");
            return (Criteria) this;
        }

        public Criteria andCAcuspecIsNull() {
            addCriterion("C_ACUSPEC is null");
            return (Criteria) this;
        }

        public Criteria andCAcuspecIsNotNull() {
            addCriterion("C_ACUSPEC is not null");
            return (Criteria) this;
        }

        public Criteria andCAcuspecEqualTo(String value) {
            addCriterion("C_ACUSPEC =", value, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecNotEqualTo(String value) {
            addCriterion("C_ACUSPEC <>", value, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecGreaterThan(String value) {
            addCriterion("C_ACUSPEC >", value, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecGreaterThanOrEqualTo(String value) {
            addCriterion("C_ACUSPEC >=", value, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecLessThan(String value) {
            addCriterion("C_ACUSPEC <", value, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecLessThanOrEqualTo(String value) {
            addCriterion("C_ACUSPEC <=", value, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecLike(String value) {
            addCriterion("C_ACUSPEC like", value, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecNotLike(String value) {
            addCriterion("C_ACUSPEC not like", value, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecIn(List<String> values) {
            addCriterion("C_ACUSPEC in", values, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecNotIn(List<String> values) {
            addCriterion("C_ACUSPEC not in", values, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecBetween(String value1, String value2) {
            addCriterion("C_ACUSPEC between", value1, value2, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCAcuspecNotBetween(String value1, String value2) {
            addCriterion("C_ACUSPEC not between", value1, value2, "cAcuspec");
            return (Criteria) this;
        }

        public Criteria andCBoxnoIsNull() {
            addCriterion("C_BOXNO is null");
            return (Criteria) this;
        }

        public Criteria andCBoxnoIsNotNull() {
            addCriterion("C_BOXNO is not null");
            return (Criteria) this;
        }

        public Criteria andCBoxnoEqualTo(String value) {
            addCriterion("C_BOXNO =", value, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoNotEqualTo(String value) {
            addCriterion("C_BOXNO <>", value, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoGreaterThan(String value) {
            addCriterion("C_BOXNO >", value, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoGreaterThanOrEqualTo(String value) {
            addCriterion("C_BOXNO >=", value, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoLessThan(String value) {
            addCriterion("C_BOXNO <", value, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoLessThanOrEqualTo(String value) {
            addCriterion("C_BOXNO <=", value, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoLike(String value) {
            addCriterion("C_BOXNO like", value, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoNotLike(String value) {
            addCriterion("C_BOXNO not like", value, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoIn(List<String> values) {
            addCriterion("C_BOXNO in", values, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoNotIn(List<String> values) {
            addCriterion("C_BOXNO not in", values, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoBetween(String value1, String value2) {
            addCriterion("C_BOXNO between", value1, value2, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCBoxnoNotBetween(String value1, String value2) {
            addCriterion("C_BOXNO not between", value1, value2, "cBoxno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoIsNull() {
            addCriterion("C_CARSHIPNO is null");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoIsNotNull() {
            addCriterion("C_CARSHIPNO is not null");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoEqualTo(String value) {
            addCriterion("C_CARSHIPNO =", value, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoNotEqualTo(String value) {
            addCriterion("C_CARSHIPNO <>", value, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoGreaterThan(String value) {
            addCriterion("C_CARSHIPNO >", value, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoGreaterThanOrEqualTo(String value) {
            addCriterion("C_CARSHIPNO >=", value, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoLessThan(String value) {
            addCriterion("C_CARSHIPNO <", value, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoLessThanOrEqualTo(String value) {
            addCriterion("C_CARSHIPNO <=", value, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoLike(String value) {
            addCriterion("C_CARSHIPNO like", value, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoNotLike(String value) {
            addCriterion("C_CARSHIPNO not like", value, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoIn(List<String> values) {
            addCriterion("C_CARSHIPNO in", values, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoNotIn(List<String> values) {
            addCriterion("C_CARSHIPNO not in", values, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoBetween(String value1, String value2) {
            addCriterion("C_CARSHIPNO between", value1, value2, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCCarshipnoNotBetween(String value1, String value2) {
            addCriterion("C_CARSHIPNO not between", value1, value2, "cCarshipno");
            return (Criteria) this;
        }

        public Criteria andCSendcompIsNull() {
            addCriterion("C_SENDCOMP is null");
            return (Criteria) this;
        }

        public Criteria andCSendcompIsNotNull() {
            addCriterion("C_SENDCOMP is not null");
            return (Criteria) this;
        }

        public Criteria andCSendcompEqualTo(String value) {
            addCriterion("C_SENDCOMP =", value, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompNotEqualTo(String value) {
            addCriterion("C_SENDCOMP <>", value, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompGreaterThan(String value) {
            addCriterion("C_SENDCOMP >", value, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompGreaterThanOrEqualTo(String value) {
            addCriterion("C_SENDCOMP >=", value, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompLessThan(String value) {
            addCriterion("C_SENDCOMP <", value, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompLessThanOrEqualTo(String value) {
            addCriterion("C_SENDCOMP <=", value, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompLike(String value) {
            addCriterion("C_SENDCOMP like", value, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompNotLike(String value) {
            addCriterion("C_SENDCOMP not like", value, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompIn(List<String> values) {
            addCriterion("C_SENDCOMP in", values, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompNotIn(List<String> values) {
            addCriterion("C_SENDCOMP not in", values, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompBetween(String value1, String value2) {
            addCriterion("C_SENDCOMP between", value1, value2, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendcompNotBetween(String value1, String value2) {
            addCriterion("C_SENDCOMP not between", value1, value2, "cSendcomp");
            return (Criteria) this;
        }

        public Criteria andCSendaddressIsNull() {
            addCriterion("C_SENDADDRESS is null");
            return (Criteria) this;
        }

        public Criteria andCSendaddressIsNotNull() {
            addCriterion("C_SENDADDRESS is not null");
            return (Criteria) this;
        }

        public Criteria andCSendaddressEqualTo(String value) {
            addCriterion("C_SENDADDRESS =", value, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressNotEqualTo(String value) {
            addCriterion("C_SENDADDRESS <>", value, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressGreaterThan(String value) {
            addCriterion("C_SENDADDRESS >", value, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressGreaterThanOrEqualTo(String value) {
            addCriterion("C_SENDADDRESS >=", value, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressLessThan(String value) {
            addCriterion("C_SENDADDRESS <", value, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressLessThanOrEqualTo(String value) {
            addCriterion("C_SENDADDRESS <=", value, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressLike(String value) {
            addCriterion("C_SENDADDRESS like", value, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressNotLike(String value) {
            addCriterion("C_SENDADDRESS not like", value, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressIn(List<String> values) {
            addCriterion("C_SENDADDRESS in", values, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressNotIn(List<String> values) {
            addCriterion("C_SENDADDRESS not in", values, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressBetween(String value1, String value2) {
            addCriterion("C_SENDADDRESS between", value1, value2, "cSendaddress");
            return (Criteria) this;
        }

        public Criteria andCSendaddressNotBetween(String value1, String value2) {
            addCriterion("C_SENDADDRESS not between", value1, value2, "cSendaddress");
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