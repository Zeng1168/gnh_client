exports.install = function(Vue, options) {

    /*------------      消息提示     ------------*/
    // 成功消息提示
    Vue.prototype.succMsg = function(str) {
        this.$message({
            message: str,
            type: 'success'
        });
    }

    // 警告消息提示
    Vue.prototype.warnMsg = function(str) {
        this.$message({
            message: str,
            type: 'warning'
        });
    }

    // 错误消息提示
    Vue.prototype.errMsg = function(str) {
        this.$message.error(str);
    }

    // 普通消息提示
    Vue.prototype.Msg = function(str) {
        this.$message(str);
    }

    /*------------      时间、日期格式化     ------------*/
    // 日期格式化
    Vue.prototype.dateFormate = function(dateStr) {
        if (!this.notEmptyN(dateStr) || isNaN(Date.parse(dateStr))) return "";
        var dt = new Date(dateStr);
        return dt.getFullYear() + '-' + (dt.getMonth() + 1).toString().padStart(2, '0') + '-' + dt.getDate().toString().padStart(2, '0');
    }

    // 日期时间格式化
    Vue.prototype.dateTimeFormate = function(dateStr) {
        if (!this.notEmptyN(dateStr) || isNaN(Date.parse(dateStr))) return "";
        var dt = new Date(dateStr);
        return dt.getFullYear() + '-' + (dt.getMonth() + 1).toString().padStart(2, '0') + '-' + dt.getDate().toString().padStart(2, '0') +
            ' ' + dt.getHours().toString().padStart(2, '0') + ':' + dt.getMinutes().toString().padStart(2, '0') + ':' + dt.getSeconds().toString().padStart(2, '0');
    }

    // 时间格式化
    Vue.prototype.timeFormate = function(dateStr) {
        if (!this.notEmptyN(dateStr) || isNaN(Date.parse(dateStr))) return "";
        var dt = new Date(dateStr);
        return dt.getHours().toString().padStart(2, '0') + ':' + dt.getMinutes().toString().padStart(2, '0');
    }

    // 时间格式化
    Vue.prototype.timeSecondsFormate = function(dateStr) {
        if (!this.notEmptyN(dateStr) || isNaN(Date.parse(dateStr))) return "";
        var dt = new Date(dateStr);
        return dt.getHours().toString().padStart(2, '0') + ':' + dt.getMinutes().toString().padStart(2, '0') +
            ' ' + dt.getSeconds().toString().padStart(2, '0');
    }

    // 时间格式化
    Vue.prototype.MinutesFormate = function(dateStr) {
        if (!this.notEmptyN(dateStr) || isNaN(Date.parse(dateStr))) return "";
        var dt = new Date(dateStr);
        return dt.getMinutes().toString().padStart(2, '0') + ':' + dt.getSeconds().toString().padStart(2, '0');
    }

    /*------------      数据排序    ------------*/
    // 正序
    Vue.prototype.dataSort = function(data, key) {
        return data.sort((a, b) => {
            var x = a[key];
            var y = b[key];
            x = x ? x : 0; // 把空置为0
            y = y ? y : 0;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        })
    }

    // 倒序
    Vue.prototype.dataSortDesc = function(data, key) {
        return data.sort((a, b) => {
            var x = b[key];
            var y = a[key];
            x = x ? x : 0; // 把空置为0
            y = y ? y : 0;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        })
    }


    /*------------      数据校验     ------------*/
    // 判断是否为空（无提示）
    Vue.prototype.notEmptyN = function(value) {

        if (typeof value == "undefined" || value == null || String(value) == "") {
            return false;
        } else {
            return true;
        }
    }


    // 判断是否为空
    Vue.prototype.notEmpty = function(value, name) {
        if (typeof value == "undefined" || value == null || String(value) == "") {
            this.warnMsg(name + '不能为空！');
            return false;
        } else {
            return true;
        }
    }

    // 判断是否为空
    Vue.prototype.notEmptyFull = function(value, name) {
        if (typeof value == "undefined" || value == null || String(value) == "") {
            this.warnMsg(name);
            return false;
        } else {
            return true;
        }
    }

    // 判断是否为空且大于零
    Vue.prototype.notEmptyPositive = function(value, name) {
        if (typeof value == "undefined" || value == null || value <= 0 || String(value) == "") {
            this.warnMsg(name + '不能为空且大于0！');
            return false;
        } else {
            return true;
        }
    }


    //判断不能为负数
    Vue.prototype.notPositive = function(value, name) {
        if (value < 0) {
            this.warnMsg(name + '不能为负数！');
            return false;
        } else {
            return true;
        }
    }

    //判断不能为负数
    Vue.prototype.Positive = function(value, name) {
        if (value != 0) {
            this.warnMsg(name + '不为零！');
            return false;
        } else {
            return true;
        }
    }

    //判断重复
    Vue.prototype.findRepetition = function(methods, name) {
        if (this.$store.getters[methods](name)) {
            this.warnMsg('名称重复！');
            return false;
        } else {
            return true;
        }
    }

    // 判断是否为空（是否选择）
    Vue.prototype.notSelect = function(value, name) {
        if (typeof value == "undefined" || value == null || String(value) == "") {
            this.warnMsg('请选择' + name + '！');
            return false;
        } else {
            return true;
        }
    }

    // 验证电话号码格式
    Vue.prototype.phoneNumber = function(value) {
        if (value && (!(/^[0-9]{6,11}$/).test(value))) {
            this.warnMsg('手机号码不符合规范');
            return false;
        } else {
            return true;
        }
    }



    /*----------     实用方法      ----------- */
    // 计算年龄
    Vue.prototype.ageCalculate = function(strBirthday) {
        var returnAge;
        var dt = new Date(strBirthday);
        var birthYear = dt.getYear();
        var birthMonth = dt.getMonth() + 1;
        var birthDay = dt.getDate();

        var d = new Date();
        var nowYear = d.getYear();
        var nowMonth = d.getMonth() + 1;
        var nowDay = d.getDate();

        if (nowYear == birthYear) {
            returnAge = 0; //同年 则为0岁
        } else {
            var ageDiff = nowYear - birthYear; //年之差
            if (ageDiff > 0) {
                if (nowMonth == birthMonth) {
                    var dayDiff = nowDay - birthDay; //日之差
                    if (dayDiff < 0) {
                        returnAge = ageDiff - 1;
                    } else {
                        returnAge = ageDiff;
                    }
                } else {
                    var monthDiff = nowMonth - birthMonth; //月之差
                    if (monthDiff < 0) {
                        returnAge = ageDiff - 1;
                    } else {
                        returnAge = ageDiff;
                    }
                }
            } else {
                returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
            }
        }

        return returnAge; //返回周岁年龄
    }


    // 日期快速选择
    // 第一个参数limit -1：限制为今天及之前   0：不限制   1：限制今天及之后
    // 第二个参数range  true：时间段   false：日期
    Vue.prototype.dateFastList = function(limit, range) {
        var shortCut = [{
            text: '今天',
            onClick(picker) {
                picker.$emit('pick', new Date());
            }
        }, {
            text: limit == -1 ? '昨天' : '明天',
            onClick(picker) {
                const date = new Date();
                if (limit == -1) {
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                } else {
                    date.setTime(date.getTime() + 3600 * 1000 * 24);
                }
                picker.$emit('pick', date);
            }
        }, {
            text: limit == -1 ? '一周前' : '一周后',
            onClick(picker) {
                const date = new Date();
                if (limit == -1) {
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                } else {
                    date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                }
                picker.$emit('pick', date);
            }
        }]

        var shortCutRange = [{
            text: '最近三天',
            onClick(picker) {
                const end = new Date();
                const start = new Date();
                if (limit == -1) {
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
                } else {
                    end.setTime(end.getTime() + 3600 * 1000 * 24 * 3);
                }
                picker.$emit('pick', [start, end]);
            }
        }, {
            text: '最近一周',
            onClick(picker) {
                const end = new Date();
                const start = new Date();
                if (limit == -1) {
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                } else {
                    end.setTime(end.getTime() + 3600 * 1000 * 24 * 7);
                }
                picker.$emit('pick', [start, end]);
            }
        }, {
            text: '最近一个月',
            onClick(picker) {
                const end = new Date();
                const start = new Date();
                if (limit == -1) {
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                } else {
                    end.setTime(end.getTime() + 3600 * 1000 * 24 * 30);
                }
                picker.$emit('pick', [start, end]);
            }
        }]

        var dateFastList = {
            disabledDate(time) {
                if (limit == -1) {
                    return time.getTime() > Date.now();
                } else if (limit == 1) {
                    return time.getTime() < Date.now() - 3600 * 1000 * 24;
                }
            },
            shortcuts: range ? shortCutRange : shortCut
        }
        return dateFastList;
    }


}