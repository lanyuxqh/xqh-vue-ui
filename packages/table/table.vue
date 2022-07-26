<template>
  <div class="x-table" ref="wrapper">
    <div class="table-wrapper" :style="{height}" ref="tableWrapper">
      <table ref="table">
        <thead>
          <tr>
            <th v-for="(col,index) in cloneColumns" :key="index" :style="{width:col.width+'px'}">
              <div v-if="col.type == 'selection'">
                <input type="checkbox" :checked="checkAllStatus" ref="checkAll" @change="selectAll" />
              </div>
              <span v-else class="x-table-cell">
                <span>{{col.title}}</span>
                <span v-if="col.sortable" class="sortable">
                  <x-icon icon="up" :class="{active:isAsc(col)}" @click="sort(col,isAsc(col)?'normal':'asc')"></x-icon>
                  <x-icon icon="down" :class="{active:isDesc(col)}" @click="sort(col,isDesc(col)?'normal':'desc')"></x-icon>
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,index) in cloneData" :key="index">
            <td v-for="(col,index) in cloneColumns" :key="index">
              <div v-if="col.type == 'selection'">
                <input type="checkbox" @change="selectOne($event,row)" :checked="isChecked(row)" />
              </div>
              <div v-else>
                <template v-if="col.slot">
                  <slot :name="col.slot" :row="row" :col="col"></slot>
                </template>
                <template v-else>{{row[col.key]}}</template>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep';
export default {
  name: 'XTable',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String
    },
  },
  data () {
    return {
      cloneColumns: cloneDeep(this.columns),
      cloneData: cloneDeep(this.data),
      selectedItems: [],
    }
  },
  watch: {
    selectedItems () {
      if (this.cloneData.length != this.selectedItems.length) {
        if (this.selectedItems.length > 0) {
          return (this.$refs.checkAll[0].indeterminate = true);
        }
      }
      this.$refs.checkAll[0].indeterminate = false; // 设置半选状态，indeterminate是js原生属性
    }
  },
  computed: {
    checkAllStatus () {
      return this.cloneData.length === this.selectedItems.length;
    }
  },
  methods: {
    isAsc (col) {
      return col.sortType == "asc";
    },
    isDesc (col) {
      return col.sortType == "desc";
    },
    sort (col, type) {
      let data = this.cloneData;
      col.sortType = type;
      if (col.sortable !== "custom") { // 远程排序，即后端排序
        if (type !== "normal") {
          let key = col.key;
          this.cloneData = data.sort((a, b) => {
            if (type == "asc") {
              return a[key] - b[key];
            } else {
              return b[key] - a[key];
            }
          });
        } else {
          // 如果不需要排序 就把默认的结果 赋予给数据即可
          this.cloneData = data;
        }
      } else {
        this.$emit("on-sort-change", {
          col: cloneDeep(col),
          type
        });
      }
    },
    isChecked (row) {
      return this.selectedItems.some(r => r._id == row._id);
    },
    selectAll (e) {
      this.selectedItems = e.target.checked ? this.cloneData : [];
      this.$emit("on-select-all", this.selectedItems);
    },
    selectOne (e, row) {
      if (e.target.checked) {
        this.selectedItems.push(row);
      } else {
        this.selectedItems = this.selectedItems.filter(r => r._id != row._id);
      }
      this.$emit("on-select", this.selectedItems, row);
    },
  },
  created () {
    // 添加唯一标识_id
    this.cloneData = this.cloneData.map(row => {
      row._id = Math.random();
      return row;
    });
    // 初始化排序
    this.cloneColumns = this.cloneColumns.map(col => {
      col.sortType = col.sortType ? col.sortType : "normal";
      this.sort(col, col.sortType);
      return col;
    });
  },
  mounted () {
    if (this.height) {
      let wrapper = this.$refs.wrapper;
      let tableWrapper = this.$refs.tableWrapper;
      let table = this.$refs.table;

      let copyTable = table.cloneNode(); // 只拷贝表格
      let thead = table.children[0];
      tableWrapper.style.paddingTop =
        thead.getBoundingClientRect().height + "px";

      copyTable.appendChild(thead);
      copyTable.style.width = table.offsetWidth + "px";
      // 固定表头
      if (this.height) {
        copyTable.classList.add("fix-header");
      }
      let tds = table.querySelector("tbody tr").children;
      let ths = copyTable.querySelector("thead tr").children;

      [...tds].forEach((item, index) => {
        ths[index].style.width = item.getBoundingClientRect().width + "px";
      });

      wrapper.appendChild(copyTable);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./table.scss";
</style>
