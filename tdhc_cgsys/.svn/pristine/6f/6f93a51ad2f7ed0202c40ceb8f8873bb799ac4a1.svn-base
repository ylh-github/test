package code_fb_cg.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class TbDocumeformExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TbDocumeformExample() {
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

        public Criteria andCStaunitIsNull() {
            addCriterion("C_STAUNIT is null");
            return (Criteria) this;
        }

        public Criteria andCStaunitIsNotNull() {
            addCriterion("C_STAUNIT is not null");
            return (Criteria) this;
        }

        public Criteria andCStaunitEqualTo(String value) {
            addCriterion("C_STAUNIT =", value, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitNotEqualTo(String value) {
            addCriterion("C_STAUNIT <>", value, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitGreaterThan(String value) {
            addCriterion("C_STAUNIT >", value, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitGreaterThanOrEqualTo(String value) {
            addCriterion("C_STAUNIT >=", value, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitLessThan(String value) {
            addCriterion("C_STAUNIT <", value, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitLessThanOrEqualTo(String value) {
            addCriterion("C_STAUNIT <=", value, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitLike(String value) {
            addCriterion("C_STAUNIT like", value, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitNotLike(String value) {
            addCriterion("C_STAUNIT not like", value, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitIn(List<String> values) {
            addCriterion("C_STAUNIT in", values, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitNotIn(List<String> values) {
            addCriterion("C_STAUNIT not in", values, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitBetween(String value1, String value2) {
            addCriterion("C_STAUNIT between", value1, value2, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCStaunitNotBetween(String value1, String value2) {
            addCriterion("C_STAUNIT not between", value1, value2, "cStaunit");
            return (Criteria) this;
        }

        public Criteria andCHscodeIsNull() {
            addCriterion("C_HSCODE is null");
            return (Criteria) this;
        }

        public Criteria andCHscodeIsNotNull() {
            addCriterion("C_HSCODE is not null");
            return (Criteria) this;
        }

        public Criteria andCHscodeEqualTo(String value) {
            addCriterion("C_HSCODE =", value, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeNotEqualTo(String value) {
            addCriterion("C_HSCODE <>", value, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeGreaterThan(String value) {
            addCriterion("C_HSCODE >", value, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeGreaterThanOrEqualTo(String value) {
            addCriterion("C_HSCODE >=", value, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeLessThan(String value) {
            addCriterion("C_HSCODE <", value, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeLessThanOrEqualTo(String value) {
            addCriterion("C_HSCODE <=", value, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeLike(String value) {
            addCriterion("C_HSCODE like", value, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeNotLike(String value) {
            addCriterion("C_HSCODE not like", value, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeIn(List<String> values) {
            addCriterion("C_HSCODE in", values, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeNotIn(List<String> values) {
            addCriterion("C_HSCODE not in", values, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeBetween(String value1, String value2) {
            addCriterion("C_HSCODE between", value1, value2, "cHscode");
            return (Criteria) this;
        }

        public Criteria andCHscodeNotBetween(String value1, String value2) {
            addCriterion("C_HSCODE not between", value1, value2, "cHscode");
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

        public Criteria andCSupervisionIsNull() {
            addCriterion("C_SUPERVISION is null");
            return (Criteria) this;
        }

        public Criteria andCSupervisionIsNotNull() {
            addCriterion("C_SUPERVISION is not null");
            return (Criteria) this;
        }

        public Criteria andCSupervisionEqualTo(String value) {
            addCriterion("C_SUPERVISION =", value, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionNotEqualTo(String value) {
            addCriterion("C_SUPERVISION <>", value, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionGreaterThan(String value) {
            addCriterion("C_SUPERVISION >", value, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionGreaterThanOrEqualTo(String value) {
            addCriterion("C_SUPERVISION >=", value, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionLessThan(String value) {
            addCriterion("C_SUPERVISION <", value, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionLessThanOrEqualTo(String value) {
            addCriterion("C_SUPERVISION <=", value, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionLike(String value) {
            addCriterion("C_SUPERVISION like", value, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionNotLike(String value) {
            addCriterion("C_SUPERVISION not like", value, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionIn(List<String> values) {
            addCriterion("C_SUPERVISION in", values, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionNotIn(List<String> values) {
            addCriterion("C_SUPERVISION not in", values, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionBetween(String value1, String value2) {
            addCriterion("C_SUPERVISION between", value1, value2, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCSupervisionNotBetween(String value1, String value2) {
            addCriterion("C_SUPERVISION not between", value1, value2, "cSupervision");
            return (Criteria) this;
        }

        public Criteria andCTaxrateIsNull() {
            addCriterion("C_TAXRATE is null");
            return (Criteria) this;
        }

        public Criteria andCTaxrateIsNotNull() {
            addCriterion("C_TAXRATE is not null");
            return (Criteria) this;
        }

        public Criteria andCTaxrateEqualTo(String value) {
            addCriterion("C_TAXRATE =", value, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateNotEqualTo(String value) {
            addCriterion("C_TAXRATE <>", value, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateGreaterThan(String value) {
            addCriterion("C_TAXRATE >", value, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateGreaterThanOrEqualTo(String value) {
            addCriterion("C_TAXRATE >=", value, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateLessThan(String value) {
            addCriterion("C_TAXRATE <", value, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateLessThanOrEqualTo(String value) {
            addCriterion("C_TAXRATE <=", value, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateLike(String value) {
            addCriterion("C_TAXRATE like", value, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateNotLike(String value) {
            addCriterion("C_TAXRATE not like", value, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateIn(List<String> values) {
            addCriterion("C_TAXRATE in", values, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateNotIn(List<String> values) {
            addCriterion("C_TAXRATE not in", values, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateBetween(String value1, String value2) {
            addCriterion("C_TAXRATE between", value1, value2, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCTaxrateNotBetween(String value1, String value2) {
            addCriterion("C_TAXRATE not between", value1, value2, "cTaxrate");
            return (Criteria) this;
        }

        public Criteria andCDeclarationIsNull() {
            addCriterion("C_DECLARATION is null");
            return (Criteria) this;
        }

        public Criteria andCDeclarationIsNotNull() {
            addCriterion("C_DECLARATION is not null");
            return (Criteria) this;
        }

        public Criteria andCDeclarationEqualTo(String value) {
            addCriterion("C_DECLARATION =", value, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationNotEqualTo(String value) {
            addCriterion("C_DECLARATION <>", value, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationGreaterThan(String value) {
            addCriterion("C_DECLARATION >", value, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationGreaterThanOrEqualTo(String value) {
            addCriterion("C_DECLARATION >=", value, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationLessThan(String value) {
            addCriterion("C_DECLARATION <", value, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationLessThanOrEqualTo(String value) {
            addCriterion("C_DECLARATION <=", value, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationLike(String value) {
            addCriterion("C_DECLARATION like", value, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationNotLike(String value) {
            addCriterion("C_DECLARATION not like", value, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationIn(List<String> values) {
            addCriterion("C_DECLARATION in", values, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationNotIn(List<String> values) {
            addCriterion("C_DECLARATION not in", values, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationBetween(String value1, String value2) {
            addCriterion("C_DECLARATION between", value1, value2, "cDeclaration");
            return (Criteria) this;
        }

        public Criteria andCDeclarationNotBetween(String value1, String value2) {
            addCriterion("C_DECLARATION not between", value1, value2, "cDeclaration");
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

        public Criteria andCNameIsNull() {
            addCriterion("C_NAME is null");
            return (Criteria) this;
        }

        public Criteria andCNameIsNotNull() {
            addCriterion("C_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andCNameEqualTo(String value) {
            addCriterion("C_NAME =", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameNotEqualTo(String value) {
            addCriterion("C_NAME <>", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameGreaterThan(String value) {
            addCriterion("C_NAME >", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameGreaterThanOrEqualTo(String value) {
            addCriterion("C_NAME >=", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameLessThan(String value) {
            addCriterion("C_NAME <", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameLessThanOrEqualTo(String value) {
            addCriterion("C_NAME <=", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameLike(String value) {
            addCriterion("C_NAME like", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameNotLike(String value) {
            addCriterion("C_NAME not like", value, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameIn(List<String> values) {
            addCriterion("C_NAME in", values, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameNotIn(List<String> values) {
            addCriterion("C_NAME not in", values, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameBetween(String value1, String value2) {
            addCriterion("C_NAME between", value1, value2, "cName");
            return (Criteria) this;
        }

        public Criteria andCNameNotBetween(String value1, String value2) {
            addCriterion("C_NAME not between", value1, value2, "cName");
            return (Criteria) this;
        }

        public Criteria andCOutconnumIsNull() {
            addCriterion("C_OUTCONNUM is null");
            return (Criteria) this;
        }

        public Criteria andCOutconnumIsNotNull() {
            addCriterion("C_OUTCONNUM is not null");
            return (Criteria) this;
        }

        public Criteria andCOutconnumEqualTo(String value) {
            addCriterion("C_OUTCONNUM =", value, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumNotEqualTo(String value) {
            addCriterion("C_OUTCONNUM <>", value, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumGreaterThan(String value) {
            addCriterion("C_OUTCONNUM >", value, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumGreaterThanOrEqualTo(String value) {
            addCriterion("C_OUTCONNUM >=", value, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumLessThan(String value) {
            addCriterion("C_OUTCONNUM <", value, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumLessThanOrEqualTo(String value) {
            addCriterion("C_OUTCONNUM <=", value, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumLike(String value) {
            addCriterion("C_OUTCONNUM like", value, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumNotLike(String value) {
            addCriterion("C_OUTCONNUM not like", value, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumIn(List<String> values) {
            addCriterion("C_OUTCONNUM in", values, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumNotIn(List<String> values) {
            addCriterion("C_OUTCONNUM not in", values, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumBetween(String value1, String value2) {
            addCriterion("C_OUTCONNUM between", value1, value2, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutconnumNotBetween(String value1, String value2) {
            addCriterion("C_OUTCONNUM not between", value1, value2, "cOutconnum");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyIsNull() {
            addCriterion("C_OUTMONEY is null");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyIsNotNull() {
            addCriterion("C_OUTMONEY is not null");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyEqualTo(String value) {
            addCriterion("C_OUTMONEY =", value, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyNotEqualTo(String value) {
            addCriterion("C_OUTMONEY <>", value, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyGreaterThan(String value) {
            addCriterion("C_OUTMONEY >", value, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyGreaterThanOrEqualTo(String value) {
            addCriterion("C_OUTMONEY >=", value, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyLessThan(String value) {
            addCriterion("C_OUTMONEY <", value, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyLessThanOrEqualTo(String value) {
            addCriterion("C_OUTMONEY <=", value, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyLike(String value) {
            addCriterion("C_OUTMONEY like", value, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyNotLike(String value) {
            addCriterion("C_OUTMONEY not like", value, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyIn(List<String> values) {
            addCriterion("C_OUTMONEY in", values, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyNotIn(List<String> values) {
            addCriterion("C_OUTMONEY not in", values, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyBetween(String value1, String value2) {
            addCriterion("C_OUTMONEY between", value1, value2, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCOutmoneyNotBetween(String value1, String value2) {
            addCriterion("C_OUTMONEY not between", value1, value2, "cOutmoney");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberIsNull() {
            addCriterion("C_COMTAXNUMBER is null");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberIsNotNull() {
            addCriterion("C_COMTAXNUMBER is not null");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberEqualTo(String value) {
            addCriterion("C_COMTAXNUMBER =", value, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberNotEqualTo(String value) {
            addCriterion("C_COMTAXNUMBER <>", value, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberGreaterThan(String value) {
            addCriterion("C_COMTAXNUMBER >", value, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberGreaterThanOrEqualTo(String value) {
            addCriterion("C_COMTAXNUMBER >=", value, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberLessThan(String value) {
            addCriterion("C_COMTAXNUMBER <", value, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberLessThanOrEqualTo(String value) {
            addCriterion("C_COMTAXNUMBER <=", value, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberLike(String value) {
            addCriterion("C_COMTAXNUMBER like", value, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberNotLike(String value) {
            addCriterion("C_COMTAXNUMBER not like", value, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberIn(List<String> values) {
            addCriterion("C_COMTAXNUMBER in", values, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberNotIn(List<String> values) {
            addCriterion("C_COMTAXNUMBER not in", values, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberBetween(String value1, String value2) {
            addCriterion("C_COMTAXNUMBER between", value1, value2, "cComtaxnumber");
            return (Criteria) this;
        }

        public Criteria andCComtaxnumberNotBetween(String value1, String value2) {
            addCriterion("C_COMTAXNUMBER not between", value1, value2, "cComtaxnumber");
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

        public Criteria andCWeightIsNull() {
            addCriterion("C_WEIGHT is null");
            return (Criteria) this;
        }

        public Criteria andCWeightIsNotNull() {
            addCriterion("C_WEIGHT is not null");
            return (Criteria) this;
        }

        public Criteria andCWeightEqualTo(String value) {
            addCriterion("C_WEIGHT =", value, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightNotEqualTo(String value) {
            addCriterion("C_WEIGHT <>", value, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightGreaterThan(String value) {
            addCriterion("C_WEIGHT >", value, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightGreaterThanOrEqualTo(String value) {
            addCriterion("C_WEIGHT >=", value, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightLessThan(String value) {
            addCriterion("C_WEIGHT <", value, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightLessThanOrEqualTo(String value) {
            addCriterion("C_WEIGHT <=", value, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightLike(String value) {
            addCriterion("C_WEIGHT like", value, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightNotLike(String value) {
            addCriterion("C_WEIGHT not like", value, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightIn(List<String> values) {
            addCriterion("C_WEIGHT in", values, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightNotIn(List<String> values) {
            addCriterion("C_WEIGHT not in", values, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightBetween(String value1, String value2) {
            addCriterion("C_WEIGHT between", value1, value2, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCWeightNotBetween(String value1, String value2) {
            addCriterion("C_WEIGHT not between", value1, value2, "cWeight");
            return (Criteria) this;
        }

        public Criteria andCBmIsNull() {
            addCriterion("C_BM is null");
            return (Criteria) this;
        }

        public Criteria andCBmIsNotNull() {
            addCriterion("C_BM is not null");
            return (Criteria) this;
        }

        public Criteria andCBmEqualTo(String value) {
            addCriterion("C_BM =", value, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmNotEqualTo(String value) {
            addCriterion("C_BM <>", value, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmGreaterThan(String value) {
            addCriterion("C_BM >", value, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmGreaterThanOrEqualTo(String value) {
            addCriterion("C_BM >=", value, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmLessThan(String value) {
            addCriterion("C_BM <", value, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmLessThanOrEqualTo(String value) {
            addCriterion("C_BM <=", value, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmLike(String value) {
            addCriterion("C_BM like", value, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmNotLike(String value) {
            addCriterion("C_BM not like", value, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmIn(List<String> values) {
            addCriterion("C_BM in", values, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmNotIn(List<String> values) {
            addCriterion("C_BM not in", values, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmBetween(String value1, String value2) {
            addCriterion("C_BM between", value1, value2, "cBm");
            return (Criteria) this;
        }

        public Criteria andCBmNotBetween(String value1, String value2) {
            addCriterion("C_BM not between", value1, value2, "cBm");
            return (Criteria) this;
        }

        public Criteria andCInvoicecIsNull() {
            addCriterion("C_INVOICEC is null");
            return (Criteria) this;
        }

        public Criteria andCInvoicecIsNotNull() {
            addCriterion("C_INVOICEC is not null");
            return (Criteria) this;
        }

        public Criteria andCInvoicecEqualTo(String value) {
            addCriterion("C_INVOICEC =", value, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecNotEqualTo(String value) {
            addCriterion("C_INVOICEC <>", value, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecGreaterThan(String value) {
            addCriterion("C_INVOICEC >", value, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecGreaterThanOrEqualTo(String value) {
            addCriterion("C_INVOICEC >=", value, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecLessThan(String value) {
            addCriterion("C_INVOICEC <", value, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecLessThanOrEqualTo(String value) {
            addCriterion("C_INVOICEC <=", value, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecLike(String value) {
            addCriterion("C_INVOICEC like", value, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecNotLike(String value) {
            addCriterion("C_INVOICEC not like", value, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecIn(List<String> values) {
            addCriterion("C_INVOICEC in", values, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecNotIn(List<String> values) {
            addCriterion("C_INVOICEC not in", values, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecBetween(String value1, String value2) {
            addCriterion("C_INVOICEC between", value1, value2, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCInvoicecNotBetween(String value1, String value2) {
            addCriterion("C_INVOICEC not between", value1, value2, "cInvoicec");
            return (Criteria) this;
        }

        public Criteria andCPpnIsNull() {
            addCriterion("C_PPN is null");
            return (Criteria) this;
        }

        public Criteria andCPpnIsNotNull() {
            addCriterion("C_PPN is not null");
            return (Criteria) this;
        }

        public Criteria andCPpnEqualTo(String value) {
            addCriterion("C_PPN =", value, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnNotEqualTo(String value) {
            addCriterion("C_PPN <>", value, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnGreaterThan(String value) {
            addCriterion("C_PPN >", value, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnGreaterThanOrEqualTo(String value) {
            addCriterion("C_PPN >=", value, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnLessThan(String value) {
            addCriterion("C_PPN <", value, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnLessThanOrEqualTo(String value) {
            addCriterion("C_PPN <=", value, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnLike(String value) {
            addCriterion("C_PPN like", value, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnNotLike(String value) {
            addCriterion("C_PPN not like", value, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnIn(List<String> values) {
            addCriterion("C_PPN in", values, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnNotIn(List<String> values) {
            addCriterion("C_PPN not in", values, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnBetween(String value1, String value2) {
            addCriterion("C_PPN between", value1, value2, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCPpnNotBetween(String value1, String value2) {
            addCriterion("C_PPN not between", value1, value2, "cPpn");
            return (Criteria) this;
        }

        public Criteria andCComphoneIsNull() {
            addCriterion("C_COMPHONE is null");
            return (Criteria) this;
        }

        public Criteria andCComphoneIsNotNull() {
            addCriterion("C_COMPHONE is not null");
            return (Criteria) this;
        }

        public Criteria andCComphoneEqualTo(String value) {
            addCriterion("C_COMPHONE =", value, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneNotEqualTo(String value) {
            addCriterion("C_COMPHONE <>", value, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneGreaterThan(String value) {
            addCriterion("C_COMPHONE >", value, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneGreaterThanOrEqualTo(String value) {
            addCriterion("C_COMPHONE >=", value, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneLessThan(String value) {
            addCriterion("C_COMPHONE <", value, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneLessThanOrEqualTo(String value) {
            addCriterion("C_COMPHONE <=", value, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneLike(String value) {
            addCriterion("C_COMPHONE like", value, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneNotLike(String value) {
            addCriterion("C_COMPHONE not like", value, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneIn(List<String> values) {
            addCriterion("C_COMPHONE in", values, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneNotIn(List<String> values) {
            addCriterion("C_COMPHONE not in", values, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneBetween(String value1, String value2) {
            addCriterion("C_COMPHONE between", value1, value2, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCComphoneNotBetween(String value1, String value2) {
            addCriterion("C_COMPHONE not between", value1, value2, "cComphone");
            return (Criteria) this;
        }

        public Criteria andCPphIsNull() {
            addCriterion("C_PPH is null");
            return (Criteria) this;
        }

        public Criteria andCPphIsNotNull() {
            addCriterion("C_PPH is not null");
            return (Criteria) this;
        }

        public Criteria andCPphEqualTo(String value) {
            addCriterion("C_PPH =", value, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphNotEqualTo(String value) {
            addCriterion("C_PPH <>", value, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphGreaterThan(String value) {
            addCriterion("C_PPH >", value, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphGreaterThanOrEqualTo(String value) {
            addCriterion("C_PPH >=", value, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphLessThan(String value) {
            addCriterion("C_PPH <", value, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphLessThanOrEqualTo(String value) {
            addCriterion("C_PPH <=", value, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphLike(String value) {
            addCriterion("C_PPH like", value, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphNotLike(String value) {
            addCriterion("C_PPH not like", value, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphIn(List<String> values) {
            addCriterion("C_PPH in", values, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphNotIn(List<String> values) {
            addCriterion("C_PPH not in", values, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphBetween(String value1, String value2) {
            addCriterion("C_PPH between", value1, value2, "cPph");
            return (Criteria) this;
        }

        public Criteria andCPphNotBetween(String value1, String value2) {
            addCriterion("C_PPH not between", value1, value2, "cPph");
            return (Criteria) this;
        }

        public Criteria andCExporterIsNull() {
            addCriterion("C_EXPORTER is null");
            return (Criteria) this;
        }

        public Criteria andCExporterIsNotNull() {
            addCriterion("C_EXPORTER is not null");
            return (Criteria) this;
        }

        public Criteria andCExporterEqualTo(String value) {
            addCriterion("C_EXPORTER =", value, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterNotEqualTo(String value) {
            addCriterion("C_EXPORTER <>", value, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterGreaterThan(String value) {
            addCriterion("C_EXPORTER >", value, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterGreaterThanOrEqualTo(String value) {
            addCriterion("C_EXPORTER >=", value, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterLessThan(String value) {
            addCriterion("C_EXPORTER <", value, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterLessThanOrEqualTo(String value) {
            addCriterion("C_EXPORTER <=", value, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterLike(String value) {
            addCriterion("C_EXPORTER like", value, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterNotLike(String value) {
            addCriterion("C_EXPORTER not like", value, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterIn(List<String> values) {
            addCriterion("C_EXPORTER in", values, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterNotIn(List<String> values) {
            addCriterion("C_EXPORTER not in", values, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterBetween(String value1, String value2) {
            addCriterion("C_EXPORTER between", value1, value2, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCExporterNotBetween(String value1, String value2) {
            addCriterion("C_EXPORTER not between", value1, value2, "cExporter");
            return (Criteria) this;
        }

        public Criteria andCWhecooIsNull() {
            addCriterion("C_WHECOO is null");
            return (Criteria) this;
        }

        public Criteria andCWhecooIsNotNull() {
            addCriterion("C_WHECOO is not null");
            return (Criteria) this;
        }

        public Criteria andCWhecooEqualTo(String value) {
            addCriterion("C_WHECOO =", value, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooNotEqualTo(String value) {
            addCriterion("C_WHECOO <>", value, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooGreaterThan(String value) {
            addCriterion("C_WHECOO >", value, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooGreaterThanOrEqualTo(String value) {
            addCriterion("C_WHECOO >=", value, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooLessThan(String value) {
            addCriterion("C_WHECOO <", value, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooLessThanOrEqualTo(String value) {
            addCriterion("C_WHECOO <=", value, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooLike(String value) {
            addCriterion("C_WHECOO like", value, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooNotLike(String value) {
            addCriterion("C_WHECOO not like", value, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooIn(List<String> values) {
            addCriterion("C_WHECOO in", values, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooNotIn(List<String> values) {
            addCriterion("C_WHECOO not in", values, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooBetween(String value1, String value2) {
            addCriterion("C_WHECOO between", value1, value2, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCWhecooNotBetween(String value1, String value2) {
            addCriterion("C_WHECOO not between", value1, value2, "cWhecoo");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrIsNull() {
            addCriterion("C_TOTALTAXR is null");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrIsNotNull() {
            addCriterion("C_TOTALTAXR is not null");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrEqualTo(String value) {
            addCriterion("C_TOTALTAXR =", value, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrNotEqualTo(String value) {
            addCriterion("C_TOTALTAXR <>", value, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrGreaterThan(String value) {
            addCriterion("C_TOTALTAXR >", value, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrGreaterThanOrEqualTo(String value) {
            addCriterion("C_TOTALTAXR >=", value, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrLessThan(String value) {
            addCriterion("C_TOTALTAXR <", value, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrLessThanOrEqualTo(String value) {
            addCriterion("C_TOTALTAXR <=", value, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrLike(String value) {
            addCriterion("C_TOTALTAXR like", value, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrNotLike(String value) {
            addCriterion("C_TOTALTAXR not like", value, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrIn(List<String> values) {
            addCriterion("C_TOTALTAXR in", values, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrNotIn(List<String> values) {
            addCriterion("C_TOTALTAXR not in", values, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrBetween(String value1, String value2) {
            addCriterion("C_TOTALTAXR between", value1, value2, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCTotaltaxrNotBetween(String value1, String value2) {
            addCriterion("C_TOTALTAXR not between", value1, value2, "cTotaltaxr");
            return (Criteria) this;
        }

        public Criteria andCShnameIsNull() {
            addCriterion("C_SHNAME is null");
            return (Criteria) this;
        }

        public Criteria andCShnameIsNotNull() {
            addCriterion("C_SHNAME is not null");
            return (Criteria) this;
        }

        public Criteria andCShnameEqualTo(String value) {
            addCriterion("C_SHNAME =", value, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameNotEqualTo(String value) {
            addCriterion("C_SHNAME <>", value, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameGreaterThan(String value) {
            addCriterion("C_SHNAME >", value, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameGreaterThanOrEqualTo(String value) {
            addCriterion("C_SHNAME >=", value, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameLessThan(String value) {
            addCriterion("C_SHNAME <", value, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameLessThanOrEqualTo(String value) {
            addCriterion("C_SHNAME <=", value, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameLike(String value) {
            addCriterion("C_SHNAME like", value, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameNotLike(String value) {
            addCriterion("C_SHNAME not like", value, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameIn(List<String> values) {
            addCriterion("C_SHNAME in", values, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameNotIn(List<String> values) {
            addCriterion("C_SHNAME not in", values, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameBetween(String value1, String value2) {
            addCriterion("C_SHNAME between", value1, value2, "cShname");
            return (Criteria) this;
        }

        public Criteria andCShnameNotBetween(String value1, String value2) {
            addCriterion("C_SHNAME not between", value1, value2, "cShname");
            return (Criteria) this;
        }

        public Criteria andCIndimportIsNull() {
            addCriterion("C_INDIMPORT is null");
            return (Criteria) this;
        }

        public Criteria andCIndimportIsNotNull() {
            addCriterion("C_INDIMPORT is not null");
            return (Criteria) this;
        }

        public Criteria andCIndimportEqualTo(String value) {
            addCriterion("C_INDIMPORT =", value, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportNotEqualTo(String value) {
            addCriterion("C_INDIMPORT <>", value, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportGreaterThan(String value) {
            addCriterion("C_INDIMPORT >", value, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportGreaterThanOrEqualTo(String value) {
            addCriterion("C_INDIMPORT >=", value, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportLessThan(String value) {
            addCriterion("C_INDIMPORT <", value, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportLessThanOrEqualTo(String value) {
            addCriterion("C_INDIMPORT <=", value, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportLike(String value) {
            addCriterion("C_INDIMPORT like", value, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportNotLike(String value) {
            addCriterion("C_INDIMPORT not like", value, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportIn(List<String> values) {
            addCriterion("C_INDIMPORT in", values, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportNotIn(List<String> values) {
            addCriterion("C_INDIMPORT not in", values, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportBetween(String value1, String value2) {
            addCriterion("C_INDIMPORT between", value1, value2, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCIndimportNotBetween(String value1, String value2) {
            addCriterion("C_INDIMPORT not between", value1, value2, "cIndimport");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxIsNull() {
            addCriterion("C_AGREEDTAX is null");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxIsNotNull() {
            addCriterion("C_AGREEDTAX is not null");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxEqualTo(String value) {
            addCriterion("C_AGREEDTAX =", value, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxNotEqualTo(String value) {
            addCriterion("C_AGREEDTAX <>", value, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxGreaterThan(String value) {
            addCriterion("C_AGREEDTAX >", value, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxGreaterThanOrEqualTo(String value) {
            addCriterion("C_AGREEDTAX >=", value, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxLessThan(String value) {
            addCriterion("C_AGREEDTAX <", value, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxLessThanOrEqualTo(String value) {
            addCriterion("C_AGREEDTAX <=", value, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxLike(String value) {
            addCriterion("C_AGREEDTAX like", value, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxNotLike(String value) {
            addCriterion("C_AGREEDTAX not like", value, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxIn(List<String> values) {
            addCriterion("C_AGREEDTAX in", values, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxNotIn(List<String> values) {
            addCriterion("C_AGREEDTAX not in", values, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxBetween(String value1, String value2) {
            addCriterion("C_AGREEDTAX between", value1, value2, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCAgreedtaxNotBetween(String value1, String value2) {
            addCriterion("C_AGREEDTAX not between", value1, value2, "cAgreedtax");
            return (Criteria) this;
        }

        public Criteria andCInpbsIsNull() {
            addCriterion("C_INPBS is null");
            return (Criteria) this;
        }

        public Criteria andCInpbsIsNotNull() {
            addCriterion("C_INPBS is not null");
            return (Criteria) this;
        }

        public Criteria andCInpbsEqualTo(String value) {
            addCriterion("C_INPBS =", value, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsNotEqualTo(String value) {
            addCriterion("C_INPBS <>", value, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsGreaterThan(String value) {
            addCriterion("C_INPBS >", value, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsGreaterThanOrEqualTo(String value) {
            addCriterion("C_INPBS >=", value, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsLessThan(String value) {
            addCriterion("C_INPBS <", value, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsLessThanOrEqualTo(String value) {
            addCriterion("C_INPBS <=", value, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsLike(String value) {
            addCriterion("C_INPBS like", value, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsNotLike(String value) {
            addCriterion("C_INPBS not like", value, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsIn(List<String> values) {
            addCriterion("C_INPBS in", values, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsNotIn(List<String> values) {
            addCriterion("C_INPBS not in", values, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsBetween(String value1, String value2) {
            addCriterion("C_INPBS between", value1, value2, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCInpbsNotBetween(String value1, String value2) {
            addCriterion("C_INPBS not between", value1, value2, "cInpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsIsNull() {
            addCriterion("C_OUTPBS is null");
            return (Criteria) this;
        }

        public Criteria andCOutpbsIsNotNull() {
            addCriterion("C_OUTPBS is not null");
            return (Criteria) this;
        }

        public Criteria andCOutpbsEqualTo(String value) {
            addCriterion("C_OUTPBS =", value, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsNotEqualTo(String value) {
            addCriterion("C_OUTPBS <>", value, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsGreaterThan(String value) {
            addCriterion("C_OUTPBS >", value, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsGreaterThanOrEqualTo(String value) {
            addCriterion("C_OUTPBS >=", value, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsLessThan(String value) {
            addCriterion("C_OUTPBS <", value, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsLessThanOrEqualTo(String value) {
            addCriterion("C_OUTPBS <=", value, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsLike(String value) {
            addCriterion("C_OUTPBS like", value, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsNotLike(String value) {
            addCriterion("C_OUTPBS not like", value, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsIn(List<String> values) {
            addCriterion("C_OUTPBS in", values, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsNotIn(List<String> values) {
            addCriterion("C_OUTPBS not in", values, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsBetween(String value1, String value2) {
            addCriterion("C_OUTPBS between", value1, value2, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCOutpbsNotBetween(String value1, String value2) {
            addCriterion("C_OUTPBS not between", value1, value2, "cOutpbs");
            return (Criteria) this;
        }

        public Criteria andCChiedeIsNull() {
            addCriterion("C_CHIEDE is null");
            return (Criteria) this;
        }

        public Criteria andCChiedeIsNotNull() {
            addCriterion("C_CHIEDE is not null");
            return (Criteria) this;
        }

        public Criteria andCChiedeEqualTo(String value) {
            addCriterion("C_CHIEDE =", value, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeNotEqualTo(String value) {
            addCriterion("C_CHIEDE <>", value, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeGreaterThan(String value) {
            addCriterion("C_CHIEDE >", value, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeGreaterThanOrEqualTo(String value) {
            addCriterion("C_CHIEDE >=", value, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeLessThan(String value) {
            addCriterion("C_CHIEDE <", value, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeLessThanOrEqualTo(String value) {
            addCriterion("C_CHIEDE <=", value, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeLike(String value) {
            addCriterion("C_CHIEDE like", value, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeNotLike(String value) {
            addCriterion("C_CHIEDE not like", value, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeIn(List<String> values) {
            addCriterion("C_CHIEDE in", values, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeNotIn(List<String> values) {
            addCriterion("C_CHIEDE not in", values, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeBetween(String value1, String value2) {
            addCriterion("C_CHIEDE between", value1, value2, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCChiedeNotBetween(String value1, String value2) {
            addCriterion("C_CHIEDE not between", value1, value2, "cChiede");
            return (Criteria) this;
        }

        public Criteria andCIndidaIsNull() {
            addCriterion("C_INDIDA is null");
            return (Criteria) this;
        }

        public Criteria andCIndidaIsNotNull() {
            addCriterion("C_INDIDA is not null");
            return (Criteria) this;
        }

        public Criteria andCIndidaEqualTo(String value) {
            addCriterion("C_INDIDA =", value, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaNotEqualTo(String value) {
            addCriterion("C_INDIDA <>", value, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaGreaterThan(String value) {
            addCriterion("C_INDIDA >", value, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaGreaterThanOrEqualTo(String value) {
            addCriterion("C_INDIDA >=", value, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaLessThan(String value) {
            addCriterion("C_INDIDA <", value, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaLessThanOrEqualTo(String value) {
            addCriterion("C_INDIDA <=", value, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaLike(String value) {
            addCriterion("C_INDIDA like", value, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaNotLike(String value) {
            addCriterion("C_INDIDA not like", value, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaIn(List<String> values) {
            addCriterion("C_INDIDA in", values, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaNotIn(List<String> values) {
            addCriterion("C_INDIDA not in", values, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaBetween(String value1, String value2) {
            addCriterion("C_INDIDA between", value1, value2, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCIndidaNotBetween(String value1, String value2) {
            addCriterion("C_INDIDA not between", value1, value2, "cIndida");
            return (Criteria) this;
        }

        public Criteria andCDataedpIsNull() {
            addCriterion("C_DATAEDP is null");
            return (Criteria) this;
        }

        public Criteria andCDataedpIsNotNull() {
            addCriterion("C_DATAEDP is not null");
            return (Criteria) this;
        }

        public Criteria andCDataedpEqualTo(String value) {
            addCriterion("C_DATAEDP =", value, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpNotEqualTo(String value) {
            addCriterion("C_DATAEDP <>", value, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpGreaterThan(String value) {
            addCriterion("C_DATAEDP >", value, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpGreaterThanOrEqualTo(String value) {
            addCriterion("C_DATAEDP >=", value, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpLessThan(String value) {
            addCriterion("C_DATAEDP <", value, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpLessThanOrEqualTo(String value) {
            addCriterion("C_DATAEDP <=", value, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpLike(String value) {
            addCriterion("C_DATAEDP like", value, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpNotLike(String value) {
            addCriterion("C_DATAEDP not like", value, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpIn(List<String> values) {
            addCriterion("C_DATAEDP in", values, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpNotIn(List<String> values) {
            addCriterion("C_DATAEDP not in", values, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpBetween(String value1, String value2) {
            addCriterion("C_DATAEDP between", value1, value2, "cDataedp");
            return (Criteria) this;
        }

        public Criteria andCDataedpNotBetween(String value1, String value2) {
            addCriterion("C_DATAEDP not between", value1, value2, "cDataedp");
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

        public Criteria andCMoneyrmbIsNull() {
            addCriterion("C_MONEYRMB is null");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbIsNotNull() {
            addCriterion("C_MONEYRMB is not null");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbEqualTo(String value) {
            addCriterion("C_MONEYRMB =", value, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbNotEqualTo(String value) {
            addCriterion("C_MONEYRMB <>", value, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbGreaterThan(String value) {
            addCriterion("C_MONEYRMB >", value, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbGreaterThanOrEqualTo(String value) {
            addCriterion("C_MONEYRMB >=", value, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbLessThan(String value) {
            addCriterion("C_MONEYRMB <", value, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbLessThanOrEqualTo(String value) {
            addCriterion("C_MONEYRMB <=", value, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbLike(String value) {
            addCriterion("C_MONEYRMB like", value, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbNotLike(String value) {
            addCriterion("C_MONEYRMB not like", value, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbIn(List<String> values) {
            addCriterion("C_MONEYRMB in", values, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbNotIn(List<String> values) {
            addCriterion("C_MONEYRMB not in", values, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbBetween(String value1, String value2) {
            addCriterion("C_MONEYRMB between", value1, value2, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyrmbNotBetween(String value1, String value2) {
            addCriterion("C_MONEYRMB not between", value1, value2, "cMoneyrmb");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdIsNull() {
            addCriterion("C_MONEYUSD is null");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdIsNotNull() {
            addCriterion("C_MONEYUSD is not null");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdEqualTo(String value) {
            addCriterion("C_MONEYUSD =", value, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdNotEqualTo(String value) {
            addCriterion("C_MONEYUSD <>", value, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdGreaterThan(String value) {
            addCriterion("C_MONEYUSD >", value, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdGreaterThanOrEqualTo(String value) {
            addCriterion("C_MONEYUSD >=", value, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdLessThan(String value) {
            addCriterion("C_MONEYUSD <", value, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdLessThanOrEqualTo(String value) {
            addCriterion("C_MONEYUSD <=", value, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdLike(String value) {
            addCriterion("C_MONEYUSD like", value, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdNotLike(String value) {
            addCriterion("C_MONEYUSD not like", value, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdIn(List<String> values) {
            addCriterion("C_MONEYUSD in", values, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdNotIn(List<String> values) {
            addCriterion("C_MONEYUSD not in", values, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdBetween(String value1, String value2) {
            addCriterion("C_MONEYUSD between", value1, value2, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCMoneyusdNotBetween(String value1, String value2) {
            addCriterion("C_MONEYUSD not between", value1, value2, "cMoneyusd");
            return (Criteria) this;
        }

        public Criteria andCDenycauseIsNull() {
            addCriterion("C_DENYCAUSE is null");
            return (Criteria) this;
        }

        public Criteria andCDenycauseIsNotNull() {
            addCriterion("C_DENYCAUSE is not null");
            return (Criteria) this;
        }

        public Criteria andCDenycauseEqualTo(String value) {
            addCriterion("C_DENYCAUSE =", value, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseNotEqualTo(String value) {
            addCriterion("C_DENYCAUSE <>", value, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseGreaterThan(String value) {
            addCriterion("C_DENYCAUSE >", value, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseGreaterThanOrEqualTo(String value) {
            addCriterion("C_DENYCAUSE >=", value, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseLessThan(String value) {
            addCriterion("C_DENYCAUSE <", value, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseLessThanOrEqualTo(String value) {
            addCriterion("C_DENYCAUSE <=", value, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseLike(String value) {
            addCriterion("C_DENYCAUSE like", value, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseNotLike(String value) {
            addCriterion("C_DENYCAUSE not like", value, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseIn(List<String> values) {
            addCriterion("C_DENYCAUSE in", values, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseNotIn(List<String> values) {
            addCriterion("C_DENYCAUSE not in", values, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseBetween(String value1, String value2) {
            addCriterion("C_DENYCAUSE between", value1, value2, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCDenycauseNotBetween(String value1, String value2) {
            addCriterion("C_DENYCAUSE not between", value1, value2, "cDenycause");
            return (Criteria) this;
        }

        public Criteria andCBackstateIsNull() {
            addCriterion("C_BACKSTATE is null");
            return (Criteria) this;
        }

        public Criteria andCBackstateIsNotNull() {
            addCriterion("C_BACKSTATE is not null");
            return (Criteria) this;
        }

        public Criteria andCBackstateEqualTo(String value) {
            addCriterion("C_BACKSTATE =", value, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateNotEqualTo(String value) {
            addCriterion("C_BACKSTATE <>", value, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateGreaterThan(String value) {
            addCriterion("C_BACKSTATE >", value, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateGreaterThanOrEqualTo(String value) {
            addCriterion("C_BACKSTATE >=", value, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateLessThan(String value) {
            addCriterion("C_BACKSTATE <", value, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateLessThanOrEqualTo(String value) {
            addCriterion("C_BACKSTATE <=", value, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateLike(String value) {
            addCriterion("C_BACKSTATE like", value, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateNotLike(String value) {
            addCriterion("C_BACKSTATE not like", value, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateIn(List<String> values) {
            addCriterion("C_BACKSTATE in", values, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateNotIn(List<String> values) {
            addCriterion("C_BACKSTATE not in", values, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateBetween(String value1, String value2) {
            addCriterion("C_BACKSTATE between", value1, value2, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCBackstateNotBetween(String value1, String value2) {
            addCriterion("C_BACKSTATE not between", value1, value2, "cBackstate");
            return (Criteria) this;
        }

        public Criteria andCStatexxlIsNull() {
            addCriterion("C_STATEXXL is null");
            return (Criteria) this;
        }

        public Criteria andCStatexxlIsNotNull() {
            addCriterion("C_STATEXXL is not null");
            return (Criteria) this;
        }

        public Criteria andCStatexxlEqualTo(String value) {
            addCriterion("C_STATEXXL =", value, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlNotEqualTo(String value) {
            addCriterion("C_STATEXXL <>", value, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlGreaterThan(String value) {
            addCriterion("C_STATEXXL >", value, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlGreaterThanOrEqualTo(String value) {
            addCriterion("C_STATEXXL >=", value, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlLessThan(String value) {
            addCriterion("C_STATEXXL <", value, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlLessThanOrEqualTo(String value) {
            addCriterion("C_STATEXXL <=", value, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlLike(String value) {
            addCriterion("C_STATEXXL like", value, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlNotLike(String value) {
            addCriterion("C_STATEXXL not like", value, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlIn(List<String> values) {
            addCriterion("C_STATEXXL in", values, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlNotIn(List<String> values) {
            addCriterion("C_STATEXXL not in", values, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlBetween(String value1, String value2) {
            addCriterion("C_STATEXXL between", value1, value2, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCStatexxlNotBetween(String value1, String value2) {
            addCriterion("C_STATEXXL not between", value1, value2, "cStatexxl");
            return (Criteria) this;
        }

        public Criteria andCBackcauseIsNull() {
            addCriterion("C_BACKCAUSE is null");
            return (Criteria) this;
        }

        public Criteria andCBackcauseIsNotNull() {
            addCriterion("C_BACKCAUSE is not null");
            return (Criteria) this;
        }

        public Criteria andCBackcauseEqualTo(String value) {
            addCriterion("C_BACKCAUSE =", value, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseNotEqualTo(String value) {
            addCriterion("C_BACKCAUSE <>", value, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseGreaterThan(String value) {
            addCriterion("C_BACKCAUSE >", value, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseGreaterThanOrEqualTo(String value) {
            addCriterion("C_BACKCAUSE >=", value, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseLessThan(String value) {
            addCriterion("C_BACKCAUSE <", value, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseLessThanOrEqualTo(String value) {
            addCriterion("C_BACKCAUSE <=", value, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseLike(String value) {
            addCriterion("C_BACKCAUSE like", value, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseNotLike(String value) {
            addCriterion("C_BACKCAUSE not like", value, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseIn(List<String> values) {
            addCriterion("C_BACKCAUSE in", values, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseNotIn(List<String> values) {
            addCriterion("C_BACKCAUSE not in", values, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseBetween(String value1, String value2) {
            addCriterion("C_BACKCAUSE between", value1, value2, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackcauseNotBetween(String value1, String value2) {
            addCriterion("C_BACKCAUSE not between", value1, value2, "cBackcause");
            return (Criteria) this;
        }

        public Criteria andCBackerIsNull() {
            addCriterion("C_BACKER is null");
            return (Criteria) this;
        }

        public Criteria andCBackerIsNotNull() {
            addCriterion("C_BACKER is not null");
            return (Criteria) this;
        }

        public Criteria andCBackerEqualTo(String value) {
            addCriterion("C_BACKER =", value, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerNotEqualTo(String value) {
            addCriterion("C_BACKER <>", value, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerGreaterThan(String value) {
            addCriterion("C_BACKER >", value, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerGreaterThanOrEqualTo(String value) {
            addCriterion("C_BACKER >=", value, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerLessThan(String value) {
            addCriterion("C_BACKER <", value, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerLessThanOrEqualTo(String value) {
            addCriterion("C_BACKER <=", value, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerLike(String value) {
            addCriterion("C_BACKER like", value, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerNotLike(String value) {
            addCriterion("C_BACKER not like", value, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerIn(List<String> values) {
            addCriterion("C_BACKER in", values, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerNotIn(List<String> values) {
            addCriterion("C_BACKER not in", values, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerBetween(String value1, String value2) {
            addCriterion("C_BACKER between", value1, value2, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBackerNotBetween(String value1, String value2) {
            addCriterion("C_BACKER not between", value1, value2, "cBacker");
            return (Criteria) this;
        }

        public Criteria andCBacketimeIsNull() {
            addCriterion("C_BACKETIME is null");
            return (Criteria) this;
        }

        public Criteria andCBacketimeIsNotNull() {
            addCriterion("C_BACKETIME is not null");
            return (Criteria) this;
        }

        public Criteria andCBacketimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_BACKETIME =", value, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_BACKETIME <>", value, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_BACKETIME >", value, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_BACKETIME >=", value, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeLessThan(Date value) {
            addCriterionForJDBCDate("C_BACKETIME <", value, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_BACKETIME <=", value, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_BACKETIME in", values, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_BACKETIME not in", values, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_BACKETIME between", value1, value2, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCBacketimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_BACKETIME not between", value1, value2, "cBacketime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeIsNull() {
            addCriterion("C_DENYTIME is null");
            return (Criteria) this;
        }

        public Criteria andCDenytimeIsNotNull() {
            addCriterion("C_DENYTIME is not null");
            return (Criteria) this;
        }

        public Criteria andCDenytimeEqualTo(Date value) {
            addCriterionForJDBCDate("C_DENYTIME =", value, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("C_DENYTIME <>", value, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeGreaterThan(Date value) {
            addCriterionForJDBCDate("C_DENYTIME >", value, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_DENYTIME >=", value, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeLessThan(Date value) {
            addCriterionForJDBCDate("C_DENYTIME <", value, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("C_DENYTIME <=", value, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeIn(List<Date> values) {
            addCriterionForJDBCDate("C_DENYTIME in", values, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("C_DENYTIME not in", values, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_DENYTIME between", value1, value2, "cDenytime");
            return (Criteria) this;
        }

        public Criteria andCDenytimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("C_DENYTIME not between", value1, value2, "cDenytime");
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