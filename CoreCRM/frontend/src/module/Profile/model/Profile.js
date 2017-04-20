/**
 * Created by chenchen on 2017/4/20.
 */
'use strict';
module.exports = {
    loadDepartments(vm) {
        setTimeout(() => {
            vm.departments = [
                {value: 1, text: '办公室'},
                {value: 2, text: '服务部'},
            ];

            vm.selected = 1;
        }, 100);
    },
    loadPositions(vm, department) {
        setTimeout(() => {
            vm.positions = [
                {value: 1, text: '岗位1 ' + department.text},
                {value: 2, text: '岗位2 ' + department.text},
            ];

            vm.selected = 1;
        }, 100);
    }
};