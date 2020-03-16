exports.install = function(Vue, options) {

    /*------------      实体类     ------------*/
    // 用户实体
    Vue.prototype.userEntity = function() {
        return {
            id: undefined,
            bindPhone: undefined
        }
    }

    // 用户打包
    Vue.prototype.userRepack = function(data) {
        var packData = {};
        if (this.notEmptyN(data.bindPhone)) packData.bindPhone = parseInt(data.bindPhone);

        return packData;
    }


}