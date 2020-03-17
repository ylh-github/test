package code_fb_cg.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TpSettlementExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TpSettlementExample() {
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

        public Criteria andCCludecomIsNull() {
            addCriterion("C_CLUDECOM is null");
            return (Criteria) this;
        }

        public Criteria andCCludecomIsNotNull() {
            addCriterion("C_CLUDECOM is not null");
            return (Criteria) this;
        }

        public Criteria andCCludecomEqualTo(String value) {
            addCriterion("C_CLUDECOM =", value, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomNotEqualTo(String value) {
            addCriterion("C_CLUDECOM <>", value, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomGreaterThan(String value) {
            addCriterion("C_CLUDECOM >", value, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomGreaterThanOrEqualTo(String value) {
            addCriterion("C_CLUDECOM >=", value, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomLessThan(String value) {
            addCriterion("C_CLUDECOM <", value, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomLessThanOrEqualTo(String value) {
            addCriterion("C_CLUDECOM <=", value, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomLike(String value) {
            addCriterion("C_CLUDECOM like", value, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomNotLike(String value) {
            addCriterion("C_CLUDECOM not like", value, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomIn(List<String> values) {
            addCriterion("C_CLUDECOM in", values, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomNotIn(List<String> values) {
            addCriterion("C_CLUDECOM not in", values, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomBetween(String value1, String value2) {
            addCriterion("C_CLUDECOM between", value1, value2, "cCludecom");
            return (Criteria) this;
        }

        public Criteria andCCludecomNotBetween(String value1, String value2) {
            addCriterion("C_CLUDECOM not between", value1, value2, "cCludecom");
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

        public Criteria andCCludetimeIsNull() {
            addCriterion("C_CLUDETIME is null");
            return (Criteria) this;
        }

        public Criteria andCCludetimeIsNotNull() {
            addCriterion("C_CLUDETIME is not null");
            return (Criteria) this;
        }

        public Criteria andCCludetimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_CLUDETIME =", value, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_CLUDETIME <>", value, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_CLUDETIME >", value, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_CLUDETIME >=", value, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeLessThan(Date value) {
            addCriterionForJDBCDate("C_CLUDETIME <", value, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_CLUDETIME <=", value, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_CLUDETIME in", values, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_CLUDETIME not in", values, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_CLUDETIME between", value1, value2, "cCludetime");
            return (Criteria) this;
        }

        public Criteria andCCludetimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_CLUDETIME not between", value1, value2, "cCludetime");
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

        public Criteria andCGoodsmoneyIsNull() {
            addCriterion("C_GOODSMONEY is null");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyIsNotNull() {
            addCriterion("C_GOODSMONEY is not null");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyEqualTo(String value) {
            addCriterion("C_GOODSMONEY =", value, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyNotEqualTo(String value) {
            addCriterion("C_GOODSMONEY <>", value, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyGreaterThan(String value) {
            addCriterion("C_GOODSMONEY >", value, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyGreaterThanOrEqualTo(String value) {
            addCriterion("C_GOODSMONEY >=", value, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyLessThan(String value) {
            addCriterion("C_GOODSMONEY <", value, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyLessThanOrEqualTo(String value) {
            addCriterion("C_GOODSMONEY <=", value, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyLike(String value) {
            addCriterion("C_GOODSMONEY like", value, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyNotLike(String value) {
            addCriterion("C_GOODSMONEY not like", value, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyIn(List<String> values) {
            addCriterion("C_GOODSMONEY in", values, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyNotIn(List<String> values) {
            addCriterion("C_GOODSMONEY not in", values, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyBetween(String value1, String value2) {
            addCriterion("C_GOODSMONEY between", value1, value2, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCGoodsmoneyNotBetween(String value1, String value2) {
            addCriterion("C_GOODSMONEY not between", value1, value2, "cGoodsmoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyIsNull() {
            addCriterion("C_PAYMONEY is null");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyIsNotNull() {
            addCriterion("C_PAYMONEY is not null");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyEqualTo(String value) {
            addCriterion("C_PAYMONEY =", value, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyNotEqualTo(String value) {
            addCriterion("C_PAYMONEY <>", value, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyGreaterThan(String value) {
            addCriterion("C_PAYMONEY >", value, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyGreaterThanOrEqualTo(String value) {
            addCriterion("C_PAYMONEY >=", value, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyLessThan(String value) {
            addCriterion("C_PAYMONEY <", value, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyLessThanOrEqualTo(String value) {
            addCriterion("C_PAYMONEY <=", value, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyLike(String value) {
            addCriterion("C_PAYMONEY like", value, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyNotLike(String value) {
            addCriterion("C_PAYMONEY not like", value, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyIn(List<String> values) {
            addCriterion("C_PAYMONEY in", values, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyNotIn(List<String> values) {
            addCriterion("C_PAYMONEY not in", values, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyBetween(String value1, String value2) {
            addCriterion("C_PAYMONEY between", value1, value2, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCPaymoneyNotBetween(String value1, String value2) {
            addCriterion("C_PAYMONEY not between", value1, value2, "cPaymoney");
            return (Criteria) this;
        }

        public Criteria andCResidualqIsNull() {
            addCriterion("C_RESIDUALQ is null");
            return (Criteria) this;
        }

        public Criteria andCResidualqIsNotNull() {
            addCriterion("C_RESIDUALQ is not null");
            return (Criteria) this;
        }

        public Criteria andCResidualqEqualTo(String value) {
            addCriterion("C_RESIDUALQ =", value, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqNotEqualTo(String value) {
            addCriterion("C_RESIDUALQ <>", value, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqGreaterThan(String value) {
            addCriterion("C_RESIDUALQ >", value, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqGreaterThanOrEqualTo(String value) {
            addCriterion("C_RESIDUALQ >=", value, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqLessThan(String value) {
            addCriterion("C_RESIDUALQ <", value, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqLessThanOrEqualTo(String value) {
            addCriterion("C_RESIDUALQ <=", value, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqLike(String value) {
            addCriterion("C_RESIDUALQ like", value, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqNotLike(String value) {
            addCriterion("C_RESIDUALQ not like", value, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqIn(List<String> values) {
            addCriterion("C_RESIDUALQ in", values, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqNotIn(List<String> values) {
            addCriterion("C_RESIDUALQ not in", values, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqBetween(String value1, String value2) {
            addCriterion("C_RESIDUALQ between", value1, value2, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCResidualqNotBetween(String value1, String value2) {
            addCriterion("C_RESIDUALQ not between", value1, value2, "cResidualq");
            return (Criteria) this;
        }

        public Criteria andCCauseIsNull() {
            addCriterion("C_CAUSE is null");
            return (Criteria) this;
        }

        public Criteria andCCauseIsNotNull() {
            addCriterion("C_CAUSE is not null");
            return (Criteria) this;
        }

        public Criteria andCCauseEqualTo(String value) {
            addCriterion("C_CAUSE =", value, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseNotEqualTo(String value) {
            addCriterion("C_CAUSE <>", value, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseGreaterThan(String value) {
            addCriterion("C_CAUSE >", value, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseGreaterThanOrEqualTo(String value) {
            addCriterion("C_CAUSE >=", value, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseLessThan(String value) {
            addCriterion("C_CAUSE <", value, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseLessThanOrEqualTo(String value) {
            addCriterion("C_CAUSE <=", value, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseLike(String value) {
            addCriterion("C_CAUSE like", value, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseNotLike(String value) {
            addCriterion("C_CAUSE not like", value, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseIn(List<String> values) {
            addCriterion("C_CAUSE in", values, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseNotIn(List<String> values) {
            addCriterion("C_CAUSE not in", values, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseBetween(String value1, String value2) {
            addCriterion("C_CAUSE between", value1, value2, "cCause");
            return (Criteria) this;
        }

        public Criteria andCCauseNotBetween(String value1, String value2) {
            addCriterion("C_CAUSE not between", value1, value2, "cCause");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyIsNull() {
            addCriterion("C_PCMONEY is null");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyIsNotNull() {
            addCriterion("C_PCMONEY is not null");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyEqualTo(String value) {
            addCriterion("C_PCMONEY =", value, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyNotEqualTo(String value) {
            addCriterion("C_PCMONEY <>", value, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyGreaterThan(String value) {
            addCriterion("C_PCMONEY >", value, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyGreaterThanOrEqualTo(String value) {
            addCriterion("C_PCMONEY >=", value, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyLessThan(String value) {
            addCriterion("C_PCMONEY <", value, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyLessThanOrEqualTo(String value) {
            addCriterion("C_PCMONEY <=", value, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyLike(String value) {
            addCriterion("C_PCMONEY like", value, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyNotLike(String value) {
            addCriterion("C_PCMONEY not like", value, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyIn(List<String> values) {
            addCriterion("C_PCMONEY in", values, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyNotIn(List<String> values) {
            addCriterion("C_PCMONEY not in", values, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyBetween(String value1, String value2) {
            addCriterion("C_PCMONEY between", value1, value2, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCPcmoneyNotBetween(String value1, String value2) {
            addCriterion("C_PCMONEY not between", value1, value2, "cPcmoney");
            return (Criteria) this;
        }

        public Criteria andCKccauseIsNull() {
            addCriterion("C_KCCAUSE is null");
            return (Criteria) this;
        }

        public Criteria andCKccauseIsNotNull() {
            addCriterion("C_KCCAUSE is not null");
            return (Criteria) this;
        }

        public Criteria andCKccauseEqualTo(String value) {
            addCriterion("C_KCCAUSE =", value, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseNotEqualTo(String value) {
            addCriterion("C_KCCAUSE <>", value, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseGreaterThan(String value) {
            addCriterion("C_KCCAUSE >", value, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseGreaterThanOrEqualTo(String value) {
            addCriterion("C_KCCAUSE >=", value, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseLessThan(String value) {
            addCriterion("C_KCCAUSE <", value, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseLessThanOrEqualTo(String value) {
            addCriterion("C_KCCAUSE <=", value, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseLike(String value) {
            addCriterion("C_KCCAUSE like", value, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseNotLike(String value) {
            addCriterion("C_KCCAUSE not like", value, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseIn(List<String> values) {
            addCriterion("C_KCCAUSE in", values, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseNotIn(List<String> values) {
            addCriterion("C_KCCAUSE not in", values, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseBetween(String value1, String value2) {
            addCriterion("C_KCCAUSE between", value1, value2, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCKccauseNotBetween(String value1, String value2) {
            addCriterion("C_KCCAUSE not between", value1, value2, "cKccause");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyIsNull() {
            addCriterion("C_ZBMONEY is null");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyIsNotNull() {
            addCriterion("C_ZBMONEY is not null");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyEqualTo(String value) {
            addCriterion("C_ZBMONEY =", value, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyNotEqualTo(String value) {
            addCriterion("C_ZBMONEY <>", value, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyGreaterThan(String value) {
            addCriterion("C_ZBMONEY >", value, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyGreaterThanOrEqualTo(String value) {
            addCriterion("C_ZBMONEY >=", value, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyLessThan(String value) {
            addCriterion("C_ZBMONEY <", value, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyLessThanOrEqualTo(String value) {
            addCriterion("C_ZBMONEY <=", value, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyLike(String value) {
            addCriterion("C_ZBMONEY like", value, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyNotLike(String value) {
            addCriterion("C_ZBMONEY not like", value, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyIn(List<String> values) {
            addCriterion("C_ZBMONEY in", values, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyNotIn(List<String> values) {
            addCriterion("C_ZBMONEY not in", values, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyBetween(String value1, String value2) {
            addCriterion("C_ZBMONEY between", value1, value2, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCZbmoneyNotBetween(String value1, String value2) {
            addCriterion("C_ZBMONEY not between", value1, value2, "cZbmoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyIsNull() {
            addCriterion("C_SETTLEMONEY is null");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyIsNotNull() {
            addCriterion("C_SETTLEMONEY is not null");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyEqualTo(String value) {
            addCriterion("C_SETTLEMONEY =", value, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyNotEqualTo(String value) {
            addCriterion("C_SETTLEMONEY <>", value, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyGreaterThan(String value) {
            addCriterion("C_SETTLEMONEY >", value, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyGreaterThanOrEqualTo(String value) {
            addCriterion("C_SETTLEMONEY >=", value, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyLessThan(String value) {
            addCriterion("C_SETTLEMONEY <", value, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyLessThanOrEqualTo(String value) {
            addCriterion("C_SETTLEMONEY <=", value, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyLike(String value) {
            addCriterion("C_SETTLEMONEY like", value, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyNotLike(String value) {
            addCriterion("C_SETTLEMONEY not like", value, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyIn(List<String> values) {
            addCriterion("C_SETTLEMONEY in", values, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyNotIn(List<String> values) {
            addCriterion("C_SETTLEMONEY not in", values, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyBetween(String value1, String value2) {
            addCriterion("C_SETTLEMONEY between", value1, value2, "cSettlemoney");
            return (Criteria) this;
        }

        public Criteria andCSettlemoneyNotBetween(String value1, String value2) {
            addCriterion("C_SETTLEMONEY not between", value1, value2, "cSettlemoney");
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