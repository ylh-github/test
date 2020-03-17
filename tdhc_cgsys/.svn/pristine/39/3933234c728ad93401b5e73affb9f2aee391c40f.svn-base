package code_fb_cg.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TbCgcontractExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TbCgcontractExample() {
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

        public Criteria andCBuyerIsNull() {
            addCriterion("C_BUYER is null");
            return (Criteria) this;
        }

        public Criteria andCBuyerIsNotNull() {
            addCriterion("C_BUYER is not null");
            return (Criteria) this;
        }

        public Criteria andCBuyerEqualTo(String value) {
            addCriterion("C_BUYER =", value, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerNotEqualTo(String value) {
            addCriterion("C_BUYER <>", value, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerGreaterThan(String value) {
            addCriterion("C_BUYER >", value, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerGreaterThanOrEqualTo(String value) {
            addCriterion("C_BUYER >=", value, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerLessThan(String value) {
            addCriterion("C_BUYER <", value, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerLessThanOrEqualTo(String value) {
            addCriterion("C_BUYER <=", value, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerLike(String value) {
            addCriterion("C_BUYER like", value, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerNotLike(String value) {
            addCriterion("C_BUYER not like", value, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerIn(List<String> values) {
            addCriterion("C_BUYER in", values, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerNotIn(List<String> values) {
            addCriterion("C_BUYER not in", values, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerBetween(String value1, String value2) {
            addCriterion("C_BUYER between", value1, value2, "cBuyer");
            return (Criteria) this;
        }

        public Criteria andCBuyerNotBetween(String value1, String value2) {
            addCriterion("C_BUYER not between", value1, value2, "cBuyer");
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

        public Criteria andCCludeaddrIsNull() {
            addCriterion("C_CLUDEADDR is null");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrIsNotNull() {
            addCriterion("C_CLUDEADDR is not null");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrEqualTo(String value) {
            addCriterion("C_CLUDEADDR =", value, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrNotEqualTo(String value) {
            addCriterion("C_CLUDEADDR <>", value, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrGreaterThan(String value) {
            addCriterion("C_CLUDEADDR >", value, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrGreaterThanOrEqualTo(String value) {
            addCriterion("C_CLUDEADDR >=", value, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrLessThan(String value) {
            addCriterion("C_CLUDEADDR <", value, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrLessThanOrEqualTo(String value) {
            addCriterion("C_CLUDEADDR <=", value, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrLike(String value) {
            addCriterion("C_CLUDEADDR like", value, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrNotLike(String value) {
            addCriterion("C_CLUDEADDR not like", value, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrIn(List<String> values) {
            addCriterion("C_CLUDEADDR in", values, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrNotIn(List<String> values) {
            addCriterion("C_CLUDEADDR not in", values, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrBetween(String value1, String value2) {
            addCriterion("C_CLUDEADDR between", value1, value2, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCCludeaddrNotBetween(String value1, String value2) {
            addCriterion("C_CLUDEADDR not between", value1, value2, "cCludeaddr");
            return (Criteria) this;
        }

        public Criteria andCSupplierIsNull() {
            addCriterion("C_SUPPLIER is null");
            return (Criteria) this;
        }

        public Criteria andCSupplierIsNotNull() {
            addCriterion("C_SUPPLIER is not null");
            return (Criteria) this;
        }

        public Criteria andCSupplierEqualTo(String value) {
            addCriterion("C_SUPPLIER =", value, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierNotEqualTo(String value) {
            addCriterion("C_SUPPLIER <>", value, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierGreaterThan(String value) {
            addCriterion("C_SUPPLIER >", value, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierGreaterThanOrEqualTo(String value) {
            addCriterion("C_SUPPLIER >=", value, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierLessThan(String value) {
            addCriterion("C_SUPPLIER <", value, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierLessThanOrEqualTo(String value) {
            addCriterion("C_SUPPLIER <=", value, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierLike(String value) {
            addCriterion("C_SUPPLIER like", value, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierNotLike(String value) {
            addCriterion("C_SUPPLIER not like", value, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierIn(List<String> values) {
            addCriterion("C_SUPPLIER in", values, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierNotIn(List<String> values) {
            addCriterion("C_SUPPLIER not in", values, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierBetween(String value1, String value2) {
            addCriterion("C_SUPPLIER between", value1, value2, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCSupplierNotBetween(String value1, String value2) {
            addCriterion("C_SUPPLIER not between", value1, value2, "cSupplier");
            return (Criteria) this;
        }

        public Criteria andCConmoneyIsNull() {
            addCriterion("C_CONMONEY is null");
            return (Criteria) this;
        }

        public Criteria andCConmoneyIsNotNull() {
            addCriterion("C_CONMONEY is not null");
            return (Criteria) this;
        }

        public Criteria andCConmoneyEqualTo(String value) {
            addCriterion("C_CONMONEY =", value, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyNotEqualTo(String value) {
            addCriterion("C_CONMONEY <>", value, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyGreaterThan(String value) {
            addCriterion("C_CONMONEY >", value, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyGreaterThanOrEqualTo(String value) {
            addCriterion("C_CONMONEY >=", value, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyLessThan(String value) {
            addCriterion("C_CONMONEY <", value, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyLessThanOrEqualTo(String value) {
            addCriterion("C_CONMONEY <=", value, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyLike(String value) {
            addCriterion("C_CONMONEY like", value, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyNotLike(String value) {
            addCriterion("C_CONMONEY not like", value, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyIn(List<String> values) {
            addCriterion("C_CONMONEY in", values, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyNotIn(List<String> values) {
            addCriterion("C_CONMONEY not in", values, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyBetween(String value1, String value2) {
            addCriterion("C_CONMONEY between", value1, value2, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCConmoneyNotBetween(String value1, String value2) {
            addCriterion("C_CONMONEY not between", value1, value2, "cConmoney");
            return (Criteria) this;
        }

        public Criteria andCPaywayIsNull() {
            addCriterion("C_PAYWAY is null");
            return (Criteria) this;
        }

        public Criteria andCPaywayIsNotNull() {
            addCriterion("C_PAYWAY is not null");
            return (Criteria) this;
        }

        public Criteria andCPaywayEqualTo(String value) {
            addCriterion("C_PAYWAY =", value, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayNotEqualTo(String value) {
            addCriterion("C_PAYWAY <>", value, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayGreaterThan(String value) {
            addCriterion("C_PAYWAY >", value, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayGreaterThanOrEqualTo(String value) {
            addCriterion("C_PAYWAY >=", value, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayLessThan(String value) {
            addCriterion("C_PAYWAY <", value, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayLessThanOrEqualTo(String value) {
            addCriterion("C_PAYWAY <=", value, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayLike(String value) {
            addCriterion("C_PAYWAY like", value, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayNotLike(String value) {
            addCriterion("C_PAYWAY not like", value, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayIn(List<String> values) {
            addCriterion("C_PAYWAY in", values, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayNotIn(List<String> values) {
            addCriterion("C_PAYWAY not in", values, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayBetween(String value1, String value2) {
            addCriterion("C_PAYWAY between", value1, value2, "cPayway");
            return (Criteria) this;
        }

        public Criteria andCPaywayNotBetween(String value1, String value2) {
            addCriterion("C_PAYWAY not between", value1, value2, "cPayway");
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

        public Criteria andCUnitpriceIsNull() {
            addCriterion("C_UNITPRICE is null");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceIsNotNull() {
            addCriterion("C_UNITPRICE is not null");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceEqualTo(String value) {
            addCriterion("C_UNITPRICE =", value, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceNotEqualTo(String value) {
            addCriterion("C_UNITPRICE <>", value, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceGreaterThan(String value) {
            addCriterion("C_UNITPRICE >", value, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceGreaterThanOrEqualTo(String value) {
            addCriterion("C_UNITPRICE >=", value, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceLessThan(String value) {
            addCriterion("C_UNITPRICE <", value, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceLessThanOrEqualTo(String value) {
            addCriterion("C_UNITPRICE <=", value, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceLike(String value) {
            addCriterion("C_UNITPRICE like", value, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceNotLike(String value) {
            addCriterion("C_UNITPRICE not like", value, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceIn(List<String> values) {
            addCriterion("C_UNITPRICE in", values, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceNotIn(List<String> values) {
            addCriterion("C_UNITPRICE not in", values, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceBetween(String value1, String value2) {
            addCriterion("C_UNITPRICE between", value1, value2, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCUnitpriceNotBetween(String value1, String value2) {
            addCriterion("C_UNITPRICE not between", value1, value2, "cUnitprice");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxIsNull() {
            addCriterion("C_TOTALTAX is null");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxIsNotNull() {
            addCriterion("C_TOTALTAX is not null");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxEqualTo(String value) {
            addCriterion("C_TOTALTAX =", value, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxNotEqualTo(String value) {
            addCriterion("C_TOTALTAX <>", value, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxGreaterThan(String value) {
            addCriterion("C_TOTALTAX >", value, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxGreaterThanOrEqualTo(String value) {
            addCriterion("C_TOTALTAX >=", value, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxLessThan(String value) {
            addCriterion("C_TOTALTAX <", value, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxLessThanOrEqualTo(String value) {
            addCriterion("C_TOTALTAX <=", value, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxLike(String value) {
            addCriterion("C_TOTALTAX like", value, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxNotLike(String value) {
            addCriterion("C_TOTALTAX not like", value, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxIn(List<String> values) {
            addCriterion("C_TOTALTAX in", values, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxNotIn(List<String> values) {
            addCriterion("C_TOTALTAX not in", values, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxBetween(String value1, String value2) {
            addCriterion("C_TOTALTAX between", value1, value2, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxNotBetween(String value1, String value2) {
            addCriterion("C_TOTALTAX not between", value1, value2, "cTotaltax");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbIsNull() {
            addCriterion("C_CONSULTRMB is null");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbIsNotNull() {
            addCriterion("C_CONSULTRMB is not null");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbEqualTo(String value) {
            addCriterion("C_CONSULTRMB =", value, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbNotEqualTo(String value) {
            addCriterion("C_CONSULTRMB <>", value, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbGreaterThan(String value) {
            addCriterion("C_CONSULTRMB >", value, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbGreaterThanOrEqualTo(String value) {
            addCriterion("C_CONSULTRMB >=", value, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbLessThan(String value) {
            addCriterion("C_CONSULTRMB <", value, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbLessThanOrEqualTo(String value) {
            addCriterion("C_CONSULTRMB <=", value, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbLike(String value) {
            addCriterion("C_CONSULTRMB like", value, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbNotLike(String value) {
            addCriterion("C_CONSULTRMB not like", value, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbIn(List<String> values) {
            addCriterion("C_CONSULTRMB in", values, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbNotIn(List<String> values) {
            addCriterion("C_CONSULTRMB not in", values, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbBetween(String value1, String value2) {
            addCriterion("C_CONSULTRMB between", value1, value2, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultrmbNotBetween(String value1, String value2) {
            addCriterion("C_CONSULTRMB not between", value1, value2, "cConsultrmb");
            return (Criteria) this;
        }

        public Criteria andCConsultIsNull() {
            addCriterion("C_CONSULT is null");
            return (Criteria) this;
        }

        public Criteria andCConsultIsNotNull() {
            addCriterion("C_CONSULT is not null");
            return (Criteria) this;
        }

        public Criteria andCConsultEqualTo(String value) {
            addCriterion("C_CONSULT =", value, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultNotEqualTo(String value) {
            addCriterion("C_CONSULT <>", value, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultGreaterThan(String value) {
            addCriterion("C_CONSULT >", value, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultGreaterThanOrEqualTo(String value) {
            addCriterion("C_CONSULT >=", value, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultLessThan(String value) {
            addCriterion("C_CONSULT <", value, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultLessThanOrEqualTo(String value) {
            addCriterion("C_CONSULT <=", value, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultLike(String value) {
            addCriterion("C_CONSULT like", value, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultNotLike(String value) {
            addCriterion("C_CONSULT not like", value, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultIn(List<String> values) {
            addCriterion("C_CONSULT in", values, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultNotIn(List<String> values) {
            addCriterion("C_CONSULT not in", values, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultBetween(String value1, String value2) {
            addCriterion("C_CONSULT between", value1, value2, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCConsultNotBetween(String value1, String value2) {
            addCriterion("C_CONSULT not between", value1, value2, "cConsult");
            return (Criteria) this;
        }

        public Criteria andCCamethodIsNull() {
            addCriterion("C_CAMETHOD is null");
            return (Criteria) this;
        }

        public Criteria andCCamethodIsNotNull() {
            addCriterion("C_CAMETHOD is not null");
            return (Criteria) this;
        }

        public Criteria andCCamethodEqualTo(String value) {
            addCriterion("C_CAMETHOD =", value, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodNotEqualTo(String value) {
            addCriterion("C_CAMETHOD <>", value, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodGreaterThan(String value) {
            addCriterion("C_CAMETHOD >", value, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodGreaterThanOrEqualTo(String value) {
            addCriterion("C_CAMETHOD >=", value, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodLessThan(String value) {
            addCriterion("C_CAMETHOD <", value, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodLessThanOrEqualTo(String value) {
            addCriterion("C_CAMETHOD <=", value, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodLike(String value) {
            addCriterion("C_CAMETHOD like", value, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodNotLike(String value) {
            addCriterion("C_CAMETHOD not like", value, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodIn(List<String> values) {
            addCriterion("C_CAMETHOD in", values, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodNotIn(List<String> values) {
            addCriterion("C_CAMETHOD not in", values, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodBetween(String value1, String value2) {
            addCriterion("C_CAMETHOD between", value1, value2, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCCamethodNotBetween(String value1, String value2) {
            addCriterion("C_CAMETHOD not between", value1, value2, "cCamethod");
            return (Criteria) this;
        }

        public Criteria andCDelivdateIsNull() {
            addCriterion("C_DELIVDATE is null");
            return (Criteria) this;
        }

        public Criteria andCDelivdateIsNotNull() {
            addCriterion("C_DELIVDATE is not null");
            return (Criteria) this;
        }

        public Criteria andCDelivdateEqualTo(Date value) {
            addCriterionForJDBCDate("C_DELIVDATE =", value, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_DELIVDATE <>", value, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateGreaterThan(Date value) {
            addCriterionForJDBCDate("C_DELIVDATE >", value, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_DELIVDATE >=", value, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateLessThan(Date value) {
            addCriterionForJDBCDate("C_DELIVDATE <", value, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_DELIVDATE <=", value, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateIn(List<Date> values) {
            addCriterionForJDBCDate("C_DELIVDATE in", values, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_DELIVDATE not in", values, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_DELIVDATE between", value1, value2, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivdateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_DELIVDATE not between", value1, value2, "cDelivdate");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceIsNull() {
            addCriterion("C_DELIVPLACE is null");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceIsNotNull() {
            addCriterion("C_DELIVPLACE is not null");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceEqualTo(String value) {
            addCriterion("C_DELIVPLACE =", value, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceNotEqualTo(String value) {
            addCriterion("C_DELIVPLACE <>", value, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceGreaterThan(String value) {
            addCriterion("C_DELIVPLACE >", value, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceGreaterThanOrEqualTo(String value) {
            addCriterion("C_DELIVPLACE >=", value, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceLessThan(String value) {
            addCriterion("C_DELIVPLACE <", value, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceLessThanOrEqualTo(String value) {
            addCriterion("C_DELIVPLACE <=", value, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceLike(String value) {
            addCriterion("C_DELIVPLACE like", value, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceNotLike(String value) {
            addCriterion("C_DELIVPLACE not like", value, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceIn(List<String> values) {
            addCriterion("C_DELIVPLACE in", values, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceNotIn(List<String> values) {
            addCriterion("C_DELIVPLACE not in", values, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceBetween(String value1, String value2) {
            addCriterion("C_DELIVPLACE between", value1, value2, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCDelivplaceNotBetween(String value1, String value2) {
            addCriterion("C_DELIVPLACE not between", value1, value2, "cDelivplace");
            return (Criteria) this;
        }

        public Criteria andCSigntimeIsNull() {
            addCriterion("C_SIGNTIME is null");
            return (Criteria) this;
        }

        public Criteria andCSigntimeIsNotNull() {
            addCriterion("C_SIGNTIME is not null");
            return (Criteria) this;
        }

        public Criteria andCSigntimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_SIGNTIME =", value, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_SIGNTIME <>", value, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_SIGNTIME >", value, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_SIGNTIME >=", value, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeLessThan(Date value) {
            addCriterionForJDBCDate("C_SIGNTIME <", value, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_SIGNTIME <=", value, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_SIGNTIME in", values, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_SIGNTIME not in", values, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_SIGNTIME between", value1, value2, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSigntimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_SIGNTIME not between", value1, value2, "cSigntime");
            return (Criteria) this;
        }

        public Criteria andCSupaddressIsNull() {
            addCriterion("C_SUPADDRESS is null");
            return (Criteria) this;
        }

        public Criteria andCSupaddressIsNotNull() {
            addCriterion("C_SUPADDRESS is not null");
            return (Criteria) this;
        }

        public Criteria andCSupaddressEqualTo(String value) {
            addCriterion("C_SUPADDRESS =", value, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressNotEqualTo(String value) {
            addCriterion("C_SUPADDRESS <>", value, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressGreaterThan(String value) {
            addCriterion("C_SUPADDRESS >", value, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressGreaterThanOrEqualTo(String value) {
            addCriterion("C_SUPADDRESS >=", value, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressLessThan(String value) {
            addCriterion("C_SUPADDRESS <", value, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressLessThanOrEqualTo(String value) {
            addCriterion("C_SUPADDRESS <=", value, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressLike(String value) {
            addCriterion("C_SUPADDRESS like", value, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressNotLike(String value) {
            addCriterion("C_SUPADDRESS not like", value, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressIn(List<String> values) {
            addCriterion("C_SUPADDRESS in", values, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressNotIn(List<String> values) {
            addCriterion("C_SUPADDRESS not in", values, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressBetween(String value1, String value2) {
            addCriterion("C_SUPADDRESS between", value1, value2, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCSupaddressNotBetween(String value1, String value2) {
            addCriterion("C_SUPADDRESS not between", value1, value2, "cSupaddress");
            return (Criteria) this;
        }

        public Criteria andCBanknameIsNull() {
            addCriterion("C_BANKNAME is null");
            return (Criteria) this;
        }

        public Criteria andCBanknameIsNotNull() {
            addCriterion("C_BANKNAME is not null");
            return (Criteria) this;
        }

        public Criteria andCBanknameEqualTo(String value) {
            addCriterion("C_BANKNAME =", value, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameNotEqualTo(String value) {
            addCriterion("C_BANKNAME <>", value, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameGreaterThan(String value) {
            addCriterion("C_BANKNAME >", value, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameGreaterThanOrEqualTo(String value) {
            addCriterion("C_BANKNAME >=", value, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameLessThan(String value) {
            addCriterion("C_BANKNAME <", value, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameLessThanOrEqualTo(String value) {
            addCriterion("C_BANKNAME <=", value, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameLike(String value) {
            addCriterion("C_BANKNAME like", value, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameNotLike(String value) {
            addCriterion("C_BANKNAME not like", value, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameIn(List<String> values) {
            addCriterion("C_BANKNAME in", values, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameNotIn(List<String> values) {
            addCriterion("C_BANKNAME not in", values, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameBetween(String value1, String value2) {
            addCriterion("C_BANKNAME between", value1, value2, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCBanknameNotBetween(String value1, String value2) {
            addCriterion("C_BANKNAME not between", value1, value2, "cBankname");
            return (Criteria) this;
        }

        public Criteria andCAccountnoIsNull() {
            addCriterion("C_ACCOUNTNO is null");
            return (Criteria) this;
        }

        public Criteria andCAccountnoIsNotNull() {
            addCriterion("C_ACCOUNTNO is not null");
            return (Criteria) this;
        }

        public Criteria andCAccountnoEqualTo(String value) {
            addCriterion("C_ACCOUNTNO =", value, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoNotEqualTo(String value) {
            addCriterion("C_ACCOUNTNO <>", value, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoGreaterThan(String value) {
            addCriterion("C_ACCOUNTNO >", value, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoGreaterThanOrEqualTo(String value) {
            addCriterion("C_ACCOUNTNO >=", value, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoLessThan(String value) {
            addCriterion("C_ACCOUNTNO <", value, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoLessThanOrEqualTo(String value) {
            addCriterion("C_ACCOUNTNO <=", value, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoLike(String value) {
            addCriterion("C_ACCOUNTNO like", value, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoNotLike(String value) {
            addCriterion("C_ACCOUNTNO not like", value, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoIn(List<String> values) {
            addCriterion("C_ACCOUNTNO in", values, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoNotIn(List<String> values) {
            addCriterion("C_ACCOUNTNO not in", values, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoBetween(String value1, String value2) {
            addCriterion("C_ACCOUNTNO between", value1, value2, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCAccountnoNotBetween(String value1, String value2) {
            addCriterion("C_ACCOUNTNO not between", value1, value2, "cAccountno");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberIsNull() {
            addCriterion("C_TAXNUMBER is null");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberIsNotNull() {
            addCriterion("C_TAXNUMBER is not null");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberEqualTo(String value) {
            addCriterion("C_TAXNUMBER =", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberNotEqualTo(String value) {
            addCriterion("C_TAXNUMBER <>", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberGreaterThan(String value) {
            addCriterion("C_TAXNUMBER >", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberGreaterThanOrEqualTo(String value) {
            addCriterion("C_TAXNUMBER >=", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberLessThan(String value) {
            addCriterion("C_TAXNUMBER <", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberLessThanOrEqualTo(String value) {
            addCriterion("C_TAXNUMBER <=", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberLike(String value) {
            addCriterion("C_TAXNUMBER like", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberNotLike(String value) {
            addCriterion("C_TAXNUMBER not like", value, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberIn(List<String> values) {
            addCriterion("C_TAXNUMBER in", values, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberNotIn(List<String> values) {
            addCriterion("C_TAXNUMBER not in", values, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberBetween(String value1, String value2) {
            addCriterion("C_TAXNUMBER between", value1, value2, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCTaxnumberNotBetween(String value1, String value2) {
            addCriterion("C_TAXNUMBER not between", value1, value2, "cTaxnumber");
            return (Criteria) this;
        }

        public Criteria andCSupphoneIsNull() {
            addCriterion("C_SUPPHONE is null");
            return (Criteria) this;
        }

        public Criteria andCSupphoneIsNotNull() {
            addCriterion("C_SUPPHONE is not null");
            return (Criteria) this;
        }

        public Criteria andCSupphoneEqualTo(String value) {
            addCriterion("C_SUPPHONE =", value, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneNotEqualTo(String value) {
            addCriterion("C_SUPPHONE <>", value, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneGreaterThan(String value) {
            addCriterion("C_SUPPHONE >", value, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneGreaterThanOrEqualTo(String value) {
            addCriterion("C_SUPPHONE >=", value, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneLessThan(String value) {
            addCriterion("C_SUPPHONE <", value, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneLessThanOrEqualTo(String value) {
            addCriterion("C_SUPPHONE <=", value, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneLike(String value) {
            addCriterion("C_SUPPHONE like", value, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneNotLike(String value) {
            addCriterion("C_SUPPHONE not like", value, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneIn(List<String> values) {
            addCriterion("C_SUPPHONE in", values, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneNotIn(List<String> values) {
            addCriterion("C_SUPPHONE not in", values, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneBetween(String value1, String value2) {
            addCriterion("C_SUPPHONE between", value1, value2, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCSupphoneNotBetween(String value1, String value2) {
            addCriterion("C_SUPPHONE not between", value1, value2, "cSupphone");
            return (Criteria) this;
        }

        public Criteria andCFaxnoIsNull() {
            addCriterion("C_FAXNO is null");
            return (Criteria) this;
        }

        public Criteria andCFaxnoIsNotNull() {
            addCriterion("C_FAXNO is not null");
            return (Criteria) this;
        }

        public Criteria andCFaxnoEqualTo(String value) {
            addCriterion("C_FAXNO =", value, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoNotEqualTo(String value) {
            addCriterion("C_FAXNO <>", value, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoGreaterThan(String value) {
            addCriterion("C_FAXNO >", value, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoGreaterThanOrEqualTo(String value) {
            addCriterion("C_FAXNO >=", value, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoLessThan(String value) {
            addCriterion("C_FAXNO <", value, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoLessThanOrEqualTo(String value) {
            addCriterion("C_FAXNO <=", value, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoLike(String value) {
            addCriterion("C_FAXNO like", value, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoNotLike(String value) {
            addCriterion("C_FAXNO not like", value, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoIn(List<String> values) {
            addCriterion("C_FAXNO in", values, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoNotIn(List<String> values) {
            addCriterion("C_FAXNO not in", values, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoBetween(String value1, String value2) {
            addCriterion("C_FAXNO between", value1, value2, "cFaxno");
            return (Criteria) this;
        }

        public Criteria andCFaxnoNotBetween(String value1, String value2) {
            addCriterion("C_FAXNO not between", value1, value2, "cFaxno");
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
            addCriterionForJDBCDate("C_TIMESTAMP =", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_TIMESTAMP <>", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampGreaterThan(Date value) {
            addCriterionForJDBCDate("C_TIMESTAMP >", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_TIMESTAMP >=", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampLessThan(Date value) {
            addCriterionForJDBCDate("C_TIMESTAMP <", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_TIMESTAMP <=", value, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampIn(List<Date> values) {
            addCriterionForJDBCDate("C_TIMESTAMP in", values, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_TIMESTAMP not in", values, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_TIMESTAMP between", value1, value2, "cTimestamp");
            return (Criteria) this;
        }

        public Criteria andCTimestampNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_TIMESTAMP not between", value1, value2, "cTimestamp");
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

        public Criteria andCSignplaceIsNull() {
            addCriterion("C_SIGNPLACE is null");
            return (Criteria) this;
        }

        public Criteria andCSignplaceIsNotNull() {
            addCriterion("C_SIGNPLACE is not null");
            return (Criteria) this;
        }

        public Criteria andCSignplaceEqualTo(String value) {
            addCriterion("C_SIGNPLACE =", value, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceNotEqualTo(String value) {
            addCriterion("C_SIGNPLACE <>", value, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceGreaterThan(String value) {
            addCriterion("C_SIGNPLACE >", value, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceGreaterThanOrEqualTo(String value) {
            addCriterion("C_SIGNPLACE >=", value, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceLessThan(String value) {
            addCriterion("C_SIGNPLACE <", value, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceLessThanOrEqualTo(String value) {
            addCriterion("C_SIGNPLACE <=", value, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceLike(String value) {
            addCriterion("C_SIGNPLACE like", value, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceNotLike(String value) {
            addCriterion("C_SIGNPLACE not like", value, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceIn(List<String> values) {
            addCriterion("C_SIGNPLACE in", values, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceNotIn(List<String> values) {
            addCriterion("C_SIGNPLACE not in", values, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceBetween(String value1, String value2) {
            addCriterion("C_SIGNPLACE between", value1, value2, "cSignplace");
            return (Criteria) this;
        }

        public Criteria andCSignplaceNotBetween(String value1, String value2) {
            addCriterion("C_SIGNPLACE not between", value1, value2, "cSignplace");
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

        public Criteria andCAccountnorIsNull() {
            addCriterion("C_ACCOUNTNOR is null");
            return (Criteria) this;
        }

        public Criteria andCAccountnorIsNotNull() {
            addCriterion("C_ACCOUNTNOR is not null");
            return (Criteria) this;
        }

        public Criteria andCAccountnorEqualTo(String value) {
            addCriterion("C_ACCOUNTNOR =", value, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorNotEqualTo(String value) {
            addCriterion("C_ACCOUNTNOR <>", value, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorGreaterThan(String value) {
            addCriterion("C_ACCOUNTNOR >", value, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorGreaterThanOrEqualTo(String value) {
            addCriterion("C_ACCOUNTNOR >=", value, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorLessThan(String value) {
            addCriterion("C_ACCOUNTNOR <", value, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorLessThanOrEqualTo(String value) {
            addCriterion("C_ACCOUNTNOR <=", value, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorLike(String value) {
            addCriterion("C_ACCOUNTNOR like", value, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorNotLike(String value) {
            addCriterion("C_ACCOUNTNOR not like", value, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorIn(List<String> values) {
            addCriterion("C_ACCOUNTNOR in", values, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorNotIn(List<String> values) {
            addCriterion("C_ACCOUNTNOR not in", values, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorBetween(String value1, String value2) {
            addCriterion("C_ACCOUNTNOR between", value1, value2, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCAccountnorNotBetween(String value1, String value2) {
            addCriterion("C_ACCOUNTNOR not between", value1, value2, "cAccountnor");
            return (Criteria) this;
        }

        public Criteria andCPhonerIsNull() {
            addCriterion("C_PHONER is null");
            return (Criteria) this;
        }

        public Criteria andCPhonerIsNotNull() {
            addCriterion("C_PHONER is not null");
            return (Criteria) this;
        }

        public Criteria andCPhonerEqualTo(String value) {
            addCriterion("C_PHONER =", value, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerNotEqualTo(String value) {
            addCriterion("C_PHONER <>", value, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerGreaterThan(String value) {
            addCriterion("C_PHONER >", value, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerGreaterThanOrEqualTo(String value) {
            addCriterion("C_PHONER >=", value, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerLessThan(String value) {
            addCriterion("C_PHONER <", value, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerLessThanOrEqualTo(String value) {
            addCriterion("C_PHONER <=", value, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerLike(String value) {
            addCriterion("C_PHONER like", value, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerNotLike(String value) {
            addCriterion("C_PHONER not like", value, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerIn(List<String> values) {
            addCriterion("C_PHONER in", values, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerNotIn(List<String> values) {
            addCriterion("C_PHONER not in", values, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerBetween(String value1, String value2) {
            addCriterion("C_PHONER between", value1, value2, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCPhonerNotBetween(String value1, String value2) {
            addCriterion("C_PHONER not between", value1, value2, "cPhoner");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeIsNull() {
            addCriterion("C_TAXNUMBE is null");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeIsNotNull() {
            addCriterion("C_TAXNUMBE is not null");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeEqualTo(String value) {
            addCriterion("C_TAXNUMBE =", value, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeNotEqualTo(String value) {
            addCriterion("C_TAXNUMBE <>", value, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeGreaterThan(String value) {
            addCriterion("C_TAXNUMBE >", value, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeGreaterThanOrEqualTo(String value) {
            addCriterion("C_TAXNUMBE >=", value, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeLessThan(String value) {
            addCriterion("C_TAXNUMBE <", value, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeLessThanOrEqualTo(String value) {
            addCriterion("C_TAXNUMBE <=", value, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeLike(String value) {
            addCriterion("C_TAXNUMBE like", value, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeNotLike(String value) {
            addCriterion("C_TAXNUMBE not like", value, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeIn(List<String> values) {
            addCriterion("C_TAXNUMBE in", values, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeNotIn(List<String> values) {
            addCriterion("C_TAXNUMBE not in", values, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeBetween(String value1, String value2) {
            addCriterion("C_TAXNUMBE between", value1, value2, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCTaxnumbeNotBetween(String value1, String value2) {
            addCriterion("C_TAXNUMBE not between", value1, value2, "cTaxnumbe");
            return (Criteria) this;
        }

        public Criteria andCBanknamerIsNull() {
            addCriterion("C_BANKNAMER is null");
            return (Criteria) this;
        }

        public Criteria andCBanknamerIsNotNull() {
            addCriterion("C_BANKNAMER is not null");
            return (Criteria) this;
        }

        public Criteria andCBanknamerEqualTo(String value) {
            addCriterion("C_BANKNAMER =", value, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerNotEqualTo(String value) {
            addCriterion("C_BANKNAMER <>", value, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerGreaterThan(String value) {
            addCriterion("C_BANKNAMER >", value, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerGreaterThanOrEqualTo(String value) {
            addCriterion("C_BANKNAMER >=", value, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerLessThan(String value) {
            addCriterion("C_BANKNAMER <", value, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerLessThanOrEqualTo(String value) {
            addCriterion("C_BANKNAMER <=", value, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerLike(String value) {
            addCriterion("C_BANKNAMER like", value, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerNotLike(String value) {
            addCriterion("C_BANKNAMER not like", value, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerIn(List<String> values) {
            addCriterion("C_BANKNAMER in", values, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerNotIn(List<String> values) {
            addCriterion("C_BANKNAMER not in", values, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerBetween(String value1, String value2) {
            addCriterion("C_BANKNAMER between", value1, value2, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCBanknamerNotBetween(String value1, String value2) {
            addCriterion("C_BANKNAMER not between", value1, value2, "cBanknamer");
            return (Criteria) this;
        }

        public Criteria andCAddressrIsNull() {
            addCriterion("C_ADDRESSR is null");
            return (Criteria) this;
        }

        public Criteria andCAddressrIsNotNull() {
            addCriterion("C_ADDRESSR is not null");
            return (Criteria) this;
        }

        public Criteria andCAddressrEqualTo(String value) {
            addCriterion("C_ADDRESSR =", value, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrNotEqualTo(String value) {
            addCriterion("C_ADDRESSR <>", value, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrGreaterThan(String value) {
            addCriterion("C_ADDRESSR >", value, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrGreaterThanOrEqualTo(String value) {
            addCriterion("C_ADDRESSR >=", value, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrLessThan(String value) {
            addCriterion("C_ADDRESSR <", value, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrLessThanOrEqualTo(String value) {
            addCriterion("C_ADDRESSR <=", value, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrLike(String value) {
            addCriterion("C_ADDRESSR like", value, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrNotLike(String value) {
            addCriterion("C_ADDRESSR not like", value, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrIn(List<String> values) {
            addCriterion("C_ADDRESSR in", values, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrNotIn(List<String> values) {
            addCriterion("C_ADDRESSR not in", values, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrBetween(String value1, String value2) {
            addCriterion("C_ADDRESSR between", value1, value2, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCAddressrNotBetween(String value1, String value2) {
            addCriterion("C_ADDRESSR not between", value1, value2, "cAddressr");
            return (Criteria) this;
        }

        public Criteria andCFaxnorIsNull() {
            addCriterion("C_FAXNOR is null");
            return (Criteria) this;
        }

        public Criteria andCFaxnorIsNotNull() {
            addCriterion("C_FAXNOR is not null");
            return (Criteria) this;
        }

        public Criteria andCFaxnorEqualTo(String value) {
            addCriterion("C_FAXNOR =", value, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorNotEqualTo(String value) {
            addCriterion("C_FAXNOR <>", value, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorGreaterThan(String value) {
            addCriterion("C_FAXNOR >", value, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorGreaterThanOrEqualTo(String value) {
            addCriterion("C_FAXNOR >=", value, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorLessThan(String value) {
            addCriterion("C_FAXNOR <", value, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorLessThanOrEqualTo(String value) {
            addCriterion("C_FAXNOR <=", value, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorLike(String value) {
            addCriterion("C_FAXNOR like", value, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorNotLike(String value) {
            addCriterion("C_FAXNOR not like", value, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorIn(List<String> values) {
            addCriterion("C_FAXNOR in", values, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorNotIn(List<String> values) {
            addCriterion("C_FAXNOR not in", values, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorBetween(String value1, String value2) {
            addCriterion("C_FAXNOR between", value1, value2, "cFaxnor");
            return (Criteria) this;
        }

        public Criteria andCFaxnorNotBetween(String value1, String value2) {
            addCriterion("C_FAXNOR not between", value1, value2, "cFaxnor");
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