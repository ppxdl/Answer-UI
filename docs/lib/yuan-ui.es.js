import { useSlots as useSlots$1, computed as computed$1, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, unref, renderSlot, createVNode, Transition, withCtx, Fragment, renderList, toDisplayString, ref as ref$2, reactive as reactive$2, withDirectives, createTextVNode, withModifiers, onMounted, createBlock, vShow, render, watchEffect as watchEffect$1, Teleport, createApp, useCssVars, resolveComponent, TransitionGroup, onBeforeUnmount, getCurrentInstance, inject, watch, nextTick, onUpdated, resolveDynamicComponent, h, defineComponent, provide, markRaw, vModelText } from "vue";
const index_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$A = /* @__PURE__ */ Object.assign({
  name: "mButton"
}, {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    round: Boolean,
    size: {
      type: String,
      default: "default"
    },
    customColor: {
      type: String,
      default: ""
    },
    leftIcon: String,
    rightIcon: String,
    localing: Boolean
  },
  setup(__props) {
    const props2 = __props;
    const mBtnDeaultStyle = {
      background: props2.customColor,
      border: props2.customColor,
      color: "#fff"
    };
    const $slot = useSlots$1();
    const isClass = computed$1(() => {
      return [
        props2.size == "default" ? "yuan-button" : props2.size == "medium" ? "yuan-button-medium" : props2.size == "small" ? "yuan-button-small" : props2.size == "mini" ? "yuan-button-mini" : "yuan-button",
        props2.type ? props2.disabled ? "" : `yuan-button-${props2.type}` : "",
        props2.disabled ? `yuan-button-${props2.type}-disabled` : "",
        {
          "yuan-button-round": props2.round
        }
      ];
    });
    const isIconClass = computed$1(() => {
      return [
        "iconfont",
        props2.leftIcon || props2.rightIcon,
        props2.localing ? props2.leftIcon == "m-icon-loading1" || props2.leftIcon == "m-icon-loading2" || props2.leftIcon == "m-icon-loading3" || props2.leftIcon == "m-icon-loading4" || props2.leftIcon == "m-icon-loading5" || props2.leftIcon == "m-icon-loading6" || props2.rightIcon == "m-icon-loading1" || props2.rightIcon == "m-icon-loading2" || props2.rightIcon == "m-icon-loading3" || props2.rightIcon == "m-icon-loading4" || props2.rightIcon == "m-icon-loading5" || props2.rightIcon == "m-icon-loading6" ? "yuan-icon-loading" : "" : ""
      ];
    });
    const styles = computed$1(() => {
      return [
        props2.customColor == "" ? {} : props2.type == "default" ? {} : mBtnDeaultStyle
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(isClass.value),
        style: normalizeStyle(styles.value)
      }, [
        __props.leftIcon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(isIconClass.value)
        }, null, 2)) : createCommentVNode("", true),
        createElementVNode("span", {
          style: normalizeStyle({
            "margin-left": unref($slot)["default"] == void 0 ? "0px" : __props.leftIcon ? "4px" : "0px",
            "margin-right": unref($slot)["default"] == void 0 ? "0px" : __props.rightIcon ? "4px" : "0px"
          })
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 4),
        __props.rightIcon ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(isIconClass.value)
        }, null, 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
_sfc_main$A.install = (app) => {
  app.component(_sfc_main$A.name, _sfc_main$A);
};
const index_vue_vue_type_style_index_0_scoped_a06bfe17_lang = "";
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$t = ["type", "value", "disabled", "placeholder", "autofocus", "readonly", "form"];
const _sfc_main$z = /* @__PURE__ */ Object.assign({
  name: "mInput"
}, {
  __name: "index",
  props: {
    modelValue: String | Number,
    disabled: Boolean,
    clearable: Boolean,
    showPassword: Boolean,
    type: String,
    size: {
      type: String,
      default: "default"
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    placeholder: String,
    //当页面加载时 <input> 元素自动获得焦点
    autofocus: Boolean,
    focusColor: {
      type: String,
      default: "#0e80eb"
    },
    readonly: Boolean,
    form: String
  },
  emits: ["update:modelValue", "clear", "focus", "blur", "input", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    const slot = useSlots();
    const isStyle = ref({});
    const inptype = ref(props2.type);
    let focusStyle = {
      "width": !!slot.btn ? "auto" : "100%",
      "float": !!slot.btn ? "left" : "auto",
      "border-radius": !!slot.btn ? "4px 0 0 4px" : "4px",
      "border-color": "#dcdfe6f6"
    };
    isStyle.value = focusStyle;
    const focus = (e) => {
      focusStyle["border-color"] = "#0e80eb";
      isStyle.value = {
        "width": !!slot.btn ? "auto" : "100%",
        "float": !!slot.btn ? "left" : "auto",
        "border-radius": !!slot.btn ? "4px 0 0 4px" : "4px",
        "border-color": props2.focusColor
      };
      emit("focus", e);
    };
    const blur = (e) => {
      isStyle.value = {
        "width": !!slot.btn ? "auto" : "100%",
        "float": !!slot.btn ? "left" : "auto",
        "border-radius": !!slot.btn ? "4px 0 0 4px" : "4px"
      };
      emit("blur", e);
    };
    const iptChange = (e) => {
      emit("update:modelValue", e.target.value);
      emit("input", e.target.value);
    };
    const change = (e) => {
      emit("change", e);
    };
    const clear = (e) => {
      emit("update:modelValue", "");
      emit("clear");
    };
    const showPwd = (e) => {
      if (inptype.value == "text") {
        inptype.value = "password";
      } else {
        inptype.value = "text";
      }
      console.log(e);
    };
    const isClass = computed(() => {
      return [
        props2.clearable ? "yuan-input-clearable" : props2.size == "default" ? "yuan-input-default" : `yuan-input-${props2.size}`,
        props2.leftIcon != "" ? `yuan-input-left-icon-${props2.size}` : !props2.clearable ? props2.rightIcon != "" ? `yuan-input-right-icon-${props2.size}` : "" : "",
        props2.disabled ? "yuan-input-disabled" : "",
        props2.type == "password" ? props2.showPassword ? `yuan-input-password-showpassword-${props2.size}` : `yuan-input-password-${props2.size}` : ""
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`yuan-group-input-${__props.size}`]),
        style: { "min-width": "auto" }
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(isClass)),
          style: normalizeStyle([unref(isStyle), {}])
        }, [
          !__props.showPassword && __props.leftIcon != "" ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["left-icon", "iconfont", __props.leftIcon])
          }, null, 2)) : createCommentVNode("", true),
          createElementVNode("input", {
            type: unref(inptype),
            onFocus: focus,
            onBlur: blur,
            value: __props.modelValue,
            onInput: iptChange,
            disabled: __props.disabled,
            onChange: change,
            placeholder: __props.placeholder,
            autofocus: __props.autofocus,
            readonly: __props.readonly,
            form: __props.form
          }, null, 40, _hoisted_1$t),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              !__props.showPassword && __props.clearable && __props.modelValue != "" ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: "clearable-icon iconfont m-icon-close",
                onClick: clear
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          !__props.showPassword && __props.rightIcon != "" ? (openBlock(), createElementBlock("i", {
            key: 1,
            class: normalizeClass(["right-icon", "iconfont", __props.rightIcon])
          }, null, 2)) : createCommentVNode("", true),
          __props.showPassword ? (openBlock(), createElementBlock("i", {
            key: 2,
            class: normalizeClass(["password-icon", "iconfont m-icon-browse"]),
            onClick: _cache[0] || (_cache[0] = ($event) => showPwd(__props.type))
          })) : createCommentVNode("", true)
        ], 6),
        renderSlot(_ctx.$slots, "btn", {}, void 0, true)
      ], 2);
    };
  }
});
const mInput = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-a06bfe17"]]);
mInput.install = (app) => {
  app.component(mInput.name, mInput);
};
const index_vue_vue_type_style_index_0_scoped_1b2a8646_lang = "";
const _hoisted_1$s = { key: 0 };
const _hoisted_2$j = { key: 1 };
const _hoisted_3$d = { key: 1 };
const _sfc_main$y = /* @__PURE__ */ Object.assign({
  name: "mTable"
}, {
  __name: "index",
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          fileds: [],
          datas: []
        };
      }
    },
    size: {
      type: String,
      default: "default"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    headStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    rowStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    customClass: String
  },
  setup(__props) {
    const $slot = useSlots$1();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`yuan-table-${__props.size}`, __props.customClass])
      }, [
        createElementVNode("table", null, [
          __props.showHeader ? (openBlock(), createElementBlock("thead", _hoisted_1$s, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options.fileds, (x, n) => {
                return openBlock(), createElementBlock("th", {
                  key: n,
                  style: normalizeStyle([__props.headStyle, { "text-align": x.align }])
                }, [
                  unref($slot)["head-" + x.field] ? renderSlot(_ctx.$slots, "head-" + x.field, {
                    key: 0,
                    scope: x
                  }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_2$j, toDisplayString(x.title), 1))
                ], 4);
              }), 128))
            ])
          ])) : createCommentVNode("", true),
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options.datas, (v, i) => {
              return openBlock(), createElementBlock("tr", { key: i }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options.fileds, (m, j) => {
                  return openBlock(), createElementBlock("td", {
                    key: j,
                    style: normalizeStyle([__props.rowStyle, { width: __props.options.fileds[j].width ? __props.options.fileds[j].width : "", "text-align": __props.options.fileds[j].align }])
                  }, [
                    unref($slot)[__props.options.fileds[j].field] ? renderSlot(_ctx.$slots, __props.options.fileds[j].field, {
                      key: 0,
                      scope: { rowIndex: i, cellIndex: j, row: v }
                    }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_3$d, toDisplayString(__props.options.datas[i][__props.options.fileds[j].field]), 1))
                  ], 4);
                }), 128))
              ]);
            }), 128))
          ])
        ])
      ], 2);
    };
  }
});
const mTable = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-1b2a8646"]]);
mTable.install = (app) => {
  app.component(mTable.name, mTable);
};
const index_vue_vue_type_style_index_0_scoped_cb866e0d_lang = "";
const _hoisted_1$r = ["readonly", "placeholder", "disabled", "value"];
const _hoisted_2$i = {
  key: 0,
  class: "yuan-select-option"
};
const _hoisted_3$c = { class: "yuan-select-option-find" };
const _hoisted_4$9 = ["onClick"];
const _hoisted_5$6 = {
  key: 0,
  class: "iconfont m-icon-select-bold"
};
const _sfc_main$x = /* @__PURE__ */ Object.assign({
  name: "mSelect"
}, {
  __name: "index",
  props: {
    modelValue: String | Array,
    placeholder: String,
    customClass: String,
    disabled: Boolean,
    searchable: Boolean,
    size: {
      type: String,
      default: "default"
    },
    width: {
      type: String,
      default: "260px"
    },
    height: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //默认需要显示的label字段
    labelFiled: {
      type: String,
      default: "label"
    },
    //默认需要显示的value字段
    valueFiled: {
      type: String,
      default: "value"
    },
    multiple: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    props2.options.forEach((item, index) => {
      if (!props2.multiple) {
        item.selected = false;
      } else {
        props2.modelValue.forEach((item1, index1) => {
          if (item[props2.valueFiled] == item1) {
            item.selected = true;
          }
        });
        console.log();
      }
    });
    const activeIndex = ref$2(-1);
    const isShow = ref$2(false);
    const rotate = ref$2("rotate(0deg)");
    const optionsData = ref$2(props2.options || []);
    const selVal = ref$2(
      props2.multiple ? props2.modelValue : props2.modelValue != "" ? props2.options.filter((item) => {
        return item[props2.valueFiled] == props2.modelValue;
      })[0][props2.labelFiled] : ""
    );
    const fixIcon = reactive$2({});
    const iconClass = computed$1(() => {
      return ["select-icon iconfont m-icon-arrow-down"];
    });
    const customStyle = computed$1(() => {
      let styles = {};
      if (props2.height) {
        let height = parseInt(props2.height) < 25 ? "25px" : props2.height;
        styles.height = height;
        fixIcon.lineHeight = height;
        fixIcon.top = 0;
        fixIcon.height = "100%";
      }
      return styles;
    });
    const selectClass = computed$1(() => {
      return [
        `yuan-select-${props2.size}`,
        props2.disabled ? `yuan-select-${props2.size}-disabled` : ""
      ];
    });
    const selectInputClass = computed$1(() => {
      return [
        "yuan-select-input-box",
        `yuan-select-input-${props2.size}`,
        props2.disabled ? `yuan-select-input-${props2.size}-disabled` : ""
      ];
    });
    const blur = (e) => {
      isShow.value = false;
      rotate.value = "rotate(0deg)";
    };
    const input = (e) => {
      selVal.value = e.target.value;
      optionsData.value = [];
      let filterList = props2.options.filter((item) => {
        return item[props2.labelFiled].indexOf(e.target.value) != -1;
      });
      filterList.forEach((item, index) => {
        optionsData.value.push(item);
      });
    };
    const vClickOutside = {
      beforeMount(el) {
        let handler = (e) => {
          if (!props2.disabled) {
            if (!props2.multiple) {
              if (el.contains(e.target) && e.target.className.indexOf("yuan-select-option-li") == -1) {
                if (!isShow.value) {
                  isShow.value = !isShow.value;
                  if (isShow.value) {
                    rotate.value = "rotate(180deg)";
                  } else {
                    rotate.value = "rotate(0deg)";
                  }
                }
              } else {
                if (isShow.value) {
                  blur();
                }
              }
            } else {
              if (el.contains(e.target)) {
                if (!isShow.value) {
                  isShow.value = !isShow.value;
                  if (isShow.value) {
                    rotate.value = "rotate(180deg)";
                  } else {
                    rotate.value = "rotate(0deg)";
                  }
                }
              } else {
                if (isShow.value) {
                  blur();
                }
              }
            }
          }
        };
        el.handler = handler;
        if (typeof document !== "undefined") {
          document.addEventListener("click", handler);
        }
      },
      unmounted(el) {
        if (typeof document !== "undefined") {
          document.removeEventListener("click", el.handler);
        }
      }
    };
    let labels = [];
    let indexs = [];
    const selChange = (item, index) => {
      if (!props2.multiple) {
        if (!item.disabled) {
          activeIndex.value = index;
          selVal.value = item[props2.labelFiled];
          emit("update:modelValue", item[props2.valueFiled]);
          emit("change", { lable: item.label, value: item.value, index });
          blur();
        }
      } else {
        if (!item.disabled) {
          Array.prototype.indexOf = function(val) {
            for (var i = 0; i < this.length; i++) {
              if (this[i] == val)
                return i;
            }
            return -1;
          };
          item.selected = !item.selected;
          if (item.selected) {
            selVal.value.push(item[props2.valueFiled]);
            labels.push(item.label);
            indexs.push(index);
          } else {
            selVal.value.splice(selVal.value.indexOf(item[props2.valueFiled]), 1);
            labels.splice(labels.indexOf(item.label), 1);
            indexs.splice(indexs.indexOf(index), 1);
          }
          emit("update:modelValue", selVal.value);
          emit("change", { lable: labels, value: selVal.value, index: indexs });
        }
      }
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([selectClass.value, __props.customClass]),
        style: normalizeStyle([
          __props.customClass ? {} : { width: parseInt(__props.width) < 100 ? "100px" : __props.width }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(selectInputClass.value)
        }, [
          createElementVNode("input", {
            type: "text",
            readonly: !__props.searchable,
            placeholder: selVal.value == "" ? __props.placeholder : selVal.value,
            style: normalizeStyle([__props.customClass ? {} : customStyle.value]),
            class: normalizeClass([selVal.value == "" ? "yuan-select-input" : "yuan-select-input-value"]),
            disabled: __props.disabled,
            onInput: input,
            value: selVal.value
          }, null, 46, _hoisted_1$r),
          createElementVNode("i", {
            class: normalizeClass(iconClass.value),
            style: normalizeStyle([{ transform: rotate.value }, fixIcon])
          }, null, 6)
        ], 2),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            isShow.value ? (openBlock(), createElementBlock("div", _hoisted_2$i, [
              createElementVNode("div", _hoisted_3$c, [
                createElementVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(optionsData.value, (item, index) => {
                    return openBlock(), createElementBlock("li", {
                      class: normalizeClass(["yuan-select-option-li", {
                        "yuan-select-active": activeIndex.value == index || selVal.value == item[__props.labelFiled] || item.selected,
                        "yuan-select-disabled": item.disabled
                      }]),
                      key: index,
                      onClick: ($event) => selChange(item, index)
                    }, [
                      createTextVNode(toDisplayString(item[__props.labelFiled]) + " ", 1),
                      __props.multiple && item.selected ? (openBlock(), createElementBlock("i", _hoisted_5$6)) : createCommentVNode("", true)
                    ], 10, _hoisted_4$9);
                  }), 128))
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 6)), [
        [vClickOutside]
      ]);
    };
  }
});
const mSelect = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-cb866e0d"]]);
mSelect.install = (app) => {
  app.component(mSelect.name, mSelect);
};
const index_vue_vue_type_style_index_0_scoped_29bd52b3_lang = "";
const _hoisted_1$q = {
  key: 0,
  class: "yuan-dropdown-item"
};
const _hoisted_2$h = { class: "yuan-dropdown-item-child" };
const _hoisted_3$b = ["onClick"];
const _sfc_main$w = /* @__PURE__ */ Object.assign({
  name: "mDropdown"
}, {
  __name: "index",
  props: {
    title: String,
    trigger: {
      type: String,
      default: "hover"
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    size: {
      type: String,
      default: "default"
    },
    customClass: String
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const proprs = __props;
    useSlots$1();
    const isShow = ref$2(false);
    const emit = __emit;
    reactive$2({
      isOpenStyles: {
        height: "0px",
        display: "none"
      }
    });
    const mouseover = () => {
      if (proprs.trigger == "hover") {
        isShow.value = true;
      }
    };
    const mouseleave = () => {
      if (proprs.trigger == "hover") {
        isShow.value = false;
      }
    };
    const handleChange = (item, index) => {
      emit("change", item, index);
      isShow.value = false;
    };
    const handleClick = () => {
      if (proprs.trigger == "click") {
        isShow.value = !isShow.value;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`yuan-dropdown-${__props.size}`, __props.customClass]),
        onMouseover: mouseover,
        onMouseleave: mouseleave,
        onClick: handleClick
      }, [
        createElementVNode("div", {
          class: normalizeClass([`yuan-dropdown-${__props.size}-menu`])
        }, [
          renderSlot(_ctx.$slots, "Img"),
          createElementVNode("span", null, toDisplayString(__props.title), 1),
          _cache[0] || (_cache[0] = createTextVNode()),
          _cache[1] || (_cache[1] = createElementVNode("i", { class: "m-icon-arrow-down" }, null, -1))
        ], 2),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            isShow.value ? (openBlock(), createElementBlock("div", _hoisted_1$q, [
              createElementVNode("div", _hoisted_2$h, [
                createElementVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index) => {
                    return openBlock(), createElementBlock("li", {
                      key: index,
                      onClick: withModifiers(($event) => handleChange(item, index), ["stop"])
                    }, [
                      createElementVNode("i", {
                        class: normalizeClass(item.icon)
                      }, null, 2),
                      createTextVNode(" " + toDisplayString(item.label), 1)
                    ], 8, _hoisted_3$b);
                  }), 128))
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 34);
    };
  }
});
const mDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-29bd52b3"]]);
mDropdown.install = (app) => {
  app.component(mDropdown.name, mDropdown);
};
/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(","))
    map[key] = 1;
  return (val) => val in map;
}
!!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
!!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];
const extend = Object.assign;
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeSub;
let batchDepth = 0;
let batchedSub;
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error)
            error = err;
        }
      }
      e = next;
    }
  }
  if (error)
    throw error;
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
    if (!!(process.env.NODE_ENV !== "production")) {
      this.subsHead = void 0;
    }
  }
  track(debugInfo) {
    {
      return;
    }
  }
  trigger(debugInfo) {
    this.version++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (!!(process.env.NODE_ENV !== "production")) {
        for (let head = this.subsHead; head; head = head.nextSub) {
          if (head.sub.onTrigger && !(head.sub.flags & 8)) {
            head.sub.onTrigger(
              extend(
                {
                  effect: head.sub
                },
                debugInfo
              )
            );
          }
        }
      }
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = /* @__PURE__ */ Symbol(
  !!(process.env.NODE_ENV !== "production") ? "Object iterate" : ""
);
const MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(
  !!(process.env.NODE_ENV !== "production") ? "Map keys iterate" : ""
);
const ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(
  !!(process.env.NODE_ENV !== "production") ? "Array iterate" : ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    if (!!(process.env.NODE_ENV !== "production")) {
      dep.track({
        target,
        type,
        key
      });
    } else {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const run = (dep) => {
    if (dep) {
      if (!!(process.env.NODE_ENV !== "production")) {
        dep.trigger({
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        });
      } else {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function reactiveReadArray(array) {
  const raw = /* @__PURE__ */ toRaw(array);
  if (raw === array)
    return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
function toWrapped(target, item) {
  if (/* @__PURE__ */ isReadonly(target)) {
    return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
  }
  return toReactive(item);
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toWrapped(this, value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(
      this,
      "filter",
      fn,
      thisArg,
      (v) => v.map((item) => toWrapped(this, item)),
      arguments
    );
  },
  find(fn, thisArg) {
    return apply(
      this,
      "find",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(
      this,
      "findLast",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", (item) => toWrapped(this, item));
  }
};
function iterator(self, method, wrapValue) {
  const arr = shallowReadArray(self);
  const iter = arr[method]();
  if (arr !== self && !/* @__PURE__ */ isShallow(self)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (!result.done) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self);
  const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toWrapped(self, item), index, self);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
  const arr = shallowReadArray(self);
  let wrappedFn = fn;
  if (arr !== self) {
    if (!/* @__PURE__ */ isShallow(self)) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, toWrapped(self, item), index, self);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self, method, args) {
  const arr = /* @__PURE__ */ toRaw(self);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
    args[0] = /* @__PURE__ */ toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self, method, args = []) {
  pauseTracking();
  startBatch();
  const res = (/* @__PURE__ */ toRaw(self))[method].apply(self, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
function hasOwnProperty(key) {
  if (!isSymbol(key))
    key = String(key);
  const obj2 = /* @__PURE__ */ toRaw(this);
  track(obj2, "has", key);
  return obj2.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip")
      return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ isRef(target) ? target : receiver
    );
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (/* @__PURE__ */ isRef(res)) {
      const value = targetIsArray && isIntegerKey(key) ? res : res.value;
      return isReadonly2 && isObject(value) ? /* @__PURE__ */ readonly(value) : value;
    }
    if (isObject(res)) {
      return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive$1(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const isArrayWithIntegerKey = isArray(target) && isIntegerKey(key);
    if (!this._isShallow) {
      const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
      if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
        oldValue = /* @__PURE__ */ toRaw(oldValue);
        value = /* @__PURE__ */ toRaw(value);
      }
      if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
        if (isOldValueReadonly) {
          if (!!(process.env.NODE_ENV !== "production")) {
            warn(
              `Set operation on key "${String(key)}" failed: target is readonly.`,
              target[key]
            );
          }
          return true;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      /* @__PURE__ */ isRef(target) ? target : receiver
    );
    if (target === /* @__PURE__ */ toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    if (!!(process.env.NODE_ENV !== "production")) {
      warn(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    if (!!(process.env.NODE_ENV !== "production")) {
      warn(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = /* @__PURE__ */ toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return extend(
      // inheriting all iterator properties
      Object.create(innerIterator),
      {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        }
      }
    );
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (!!(process.env.NODE_ENV !== "production")) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn(
        `${capitalize(type)} operation ${key}failed: target is readonly.`,
        /* @__PURE__ */ toRaw(this)
      );
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const rawKey = /* @__PURE__ */ toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
      return target.size;
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const rawKey = /* @__PURE__ */ toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
          value = /* @__PURE__ */ toRaw(value);
        }
        const target = /* @__PURE__ */ toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
          value = /* @__PURE__ */ toRaw(value);
        }
        const target = /* @__PURE__ */ toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = /* @__PURE__ */ toRaw(key);
          hadKey = has.call(target, key);
        } else if (!!(process.env.NODE_ENV !== "production")) {
          checkIdentityKeys(target, has, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
        return this;
      },
      delete(key) {
        const target = /* @__PURE__ */ toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = /* @__PURE__ */ toRaw(key);
          hadKey = has.call(target, key);
        } else if (!!(process.env.NODE_ENV !== "production")) {
          checkIdentityKeys(target, has, key);
        }
        const oldValue = get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      },
      clear() {
        const target = /* @__PURE__ */ toRaw(this);
        const hadItems = target.size !== 0;
        const oldTarget = !!(process.env.NODE_ENV !== "production") ? isMap(target) ? new Map(target) : new Set(target) : void 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0,
            oldTarget
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has, key) {
  const rawKey = /* @__PURE__ */ toRaw(key);
  if (rawKey !== key && has.call(target, rawKey)) {
    const type = toRawType(target);
    warn(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
// @__NO_SIDE_EFFECTS__
function reactive$1(target) {
  if (/* @__PURE__ */ isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
// @__NO_SIDE_EFFECTS__
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (!!(process.env.NODE_ENV !== "production")) {
      warn(
        `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
          target
        )}`
      );
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
// @__NO_SIDE_EFFECTS__
function isReactive(value) {
  if (/* @__PURE__ */ isReadonly(value)) {
    return /* @__PURE__ */ isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
// @__NO_SIDE_EFFECTS__
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
// @__NO_SIDE_EFFECTS__
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
// @__NO_SIDE_EFFECTS__
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
// @__NO_SIDE_EFFECTS__
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
const toReactive = (value) => isObject(value) ? /* @__PURE__ */ reactive$1(value) : value;
const toReadonly = (value) => isObject(value) ? /* @__PURE__ */ readonly(value) : value;
// @__NO_SIDE_EFFECTS__
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
// @__NO_SIDE_EFFECTS__
function ref$1(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (/* @__PURE__ */ isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    if (!!(process.env.NODE_ENV !== "production")) {
      this.dep.track({
        target: this,
        type: "get",
        key: "value"
      });
    } else {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
    newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      if (!!(process.env.NODE_ENV !== "production")) {
        this.dep.trigger({
          target: this,
          type: "set",
          key: "value",
          newValue,
          oldValue
        });
      } else {
        this.dep.trigger();
      }
    }
  }
}
const index_vue_vue_type_style_index_0_scoped_e9d244de_lang = "";
const _hoisted_1$p = ["onClick"];
const _sfc_main$v = /* @__PURE__ */ Object.assign({
  name: "mRadio"
}, {
  __name: "index",
  props: {
    modelValue: String | Number,
    size: {
      type: String,
      default: "default"
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    labelFiled: {
      type: String,
      default: "label"
    },
    valueFiled: {
      type: String,
      default: "value"
    },
    customColor: String,
    customClass: String,
    inline: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    const modelVal = /* @__PURE__ */ ref$1(props2.modelValue || "");
    const change = (item, index) => {
      if (!item.disabled) {
        modelVal.value = item[props2.valueFiled];
        emit("update:modelValue", item[props2.valueFiled]);
        emit("change", { "value": item[props2.valueFiled], "index": index });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`yuan-radio-${__props.size}`, __props.customClass])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index) => {
          return openBlock(), createElementBlock("label", {
            key: index,
            class: normalizeClass([{ "yuan-radio-active": unref(modelVal) == item[__props.valueFiled] }, item.disabled ? unref(modelVal) == item[__props.valueFiled] ? "yuan-radio-active-disabled" : "yuan-radio-disabled" : ""]),
            onClick: ($event) => change(item, index),
            style: normalizeStyle({ "display": __props.inline ? "inline-block" : "table", "margin-bottom": __props.inline ? "0" : __props.size == "small" ? "8px" : __props.size == "mini" ? "6px" : "10px" })
          }, [
            createElementVNode("span", {
              class: "yuan-radio-round",
              style: normalizeStyle({ "border-color": __props.customColor == "" ? "" : item.disabled ? "" : unref(modelVal) != item[__props.valueFiled] ? "" : __props.customColor, "background": __props.customColor == "" ? "" : item.disabled ? "" : unref(modelVal) != item[__props.valueFiled] ? "" : __props.customColor })
            }, null, 4),
            createElementVNode("span", {
              style: normalizeStyle({ "color": __props.customColor == "" ? "" : item.disabled ? "" : unref(modelVal) != item[__props.valueFiled] ? "" : __props.customColor })
            }, toDisplayString(item[__props.labelFiled]), 5)
          ], 14, _hoisted_1$p);
        }), 128))
      ], 2);
    };
  }
});
const mRadio = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-e9d244de"]]);
mRadio.install = (app) => {
  app.component(mRadio.name, mRadio);
};
const index_vue_vue_type_style_index_0_scoped_fdc8dab1_lang = "";
const _hoisted_1$o = ["onClick"];
const _sfc_main$u = /* @__PURE__ */ Object.assign({
  name: "mCheckbox"
}, {
  __name: "index",
  props: {
    modelValue: {
      type: Array,
      default: () => {
        return [];
      }
    },
    size: {
      type: String,
      default: "default"
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    labelFiled: {
      type: String,
      default: "label"
    },
    valueFiled: {
      type: String,
      default: "value"
    },
    inline: {
      type: Boolean,
      default: true
    },
    customColor: String,
    customClass: String
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    const checkOptions = ref$2(props2.options || []);
    checkOptions.value.forEach((item) => {
      item.checked = false;
      props2.modelValue.forEach((item1) => {
        if (item[props2.valueFiled] === item1) {
          item.checked = true;
        }
      });
    });
    const checkChange = (item, index) => {
      let checkData = [];
      if (!item.disabled) {
        item.checked = !item.checked;
      }
      checkOptions.value.forEach((item2, index2) => {
        if (item2.checked) {
          checkData.push(item2[props2.valueFiled]);
        }
      });
      emit("update:modelValue", checkData);
      emit("change", { "value": checkData, "index": index });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([`yuan-checkbox-${__props.size}`, __props.customClass])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(checkOptions.value, (item, index) => {
          return openBlock(), createElementBlock("label", {
            key: index,
            class: normalizeClass(["yuan-checkbox-label", [{ "yuan-checkbox-label-active": item.checked }, item.checked ? item.disabled ? "yuan-checkbox-label-active-disabled" : "" : item.disabled ? "yuan-checkbox-label-disabled" : ""]]),
            onClick: ($event) => checkChange(item, index),
            style: normalizeStyle({ "display": __props.inline ? "inline-block" : "table", "margin-bottom": __props.inline ? "0" : __props.size == "small" ? "8px" : __props.size == "mini" ? "6px" : "10px" })
          }, [
            createElementVNode("span", {
              class: "yuan-checkbox-selectbox",
              style: normalizeStyle({ "border-color": __props.customColor == "" ? "" : item.disabled ? "" : item.checked ? __props.customColor : "", "background": __props.customColor == "" ? "" : item.disabled ? "" : item.checked ? __props.customColor : "" })
            }, null, 4),
            createElementVNode("span", {
              style: normalizeStyle({ "color": __props.customColor == "" ? "" : item.disabled ? "" : item.checked ? __props.customColor : "" })
            }, toDisplayString(item[__props.labelFiled]), 5)
          ], 14, _hoisted_1$o);
        }), 128))
      ], 2);
    };
  }
});
const mCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-fdc8dab1"]]);
mCheckbox.install = (app) => {
  app.component(mCheckbox.name, mCheckbox);
};
const index_vue_vue_type_style_index_0_scoped_6a2fe5ec_lang = "";
const _hoisted_1$n = { class: "text" };
const _sfc_main$t = {
  __name: "index",
  props: {
    text: {
      type: [String, Object],
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    icon: String,
    textColor: String,
    bgColor: String,
    customClass: String
  },
  setup(__props) {
    const props2 = __props;
    const state = reactive$2({
      style: {
        info: {
          icon: props2.icon || "m-icon-prompt-filling",
          color: "#505050",
          backgroundColor: "rgb(229 227 224)",
          borderColor: "rgb(229 227 224)"
        },
        warn: {
          icon: props2.icon || "m-icon-warning",
          color: "#f57b29",
          backgroundColor: "rgb(243 233 220)",
          borderColor: "rgb(243 233 220)"
        },
        error: {
          icon: props2.icon || "m-icon-delete-filling",
          color: "#ec3437",
          backgroundColor: "rgb(251 228 228)",
          borderColor: "rgb(251 228 228)"
        },
        success: {
          icon: props2.icon || "m-icon-success",
          color: "#09b63d",
          backgroundColor: "rgb(223 243 212)",
          borderColor: "rgb(223 243 212)"
        },
        custom: {
          icon: props2.icon,
          color: props2.textColor,
          backgroundColor: props2.bgColor,
          borderColor: props2.bgColor
        }
      }
    });
    const isShow = ref$2(false);
    const { style } = state;
    const isText = computed$1(() => {
      return typeof props2.text === "string";
    });
    onMounted(() => {
      isShow.value = true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "slide-fade" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(["yuan-message", __props.customClass]),
            style: normalizeStyle(unref(style)[__props.type])
          }, [
            isText.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createElementVNode("i", {
                class: normalizeClass([unref(style)[__props.type].icon])
              }, null, 2),
              createElementVNode("span", _hoisted_1$n, toDisplayString(__props.text), 1)
            ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
          ], 6), [
            [vShow, isShow.value]
          ])
        ]),
        _: 3
      });
    };
  }
};
const mMessage = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-6a2fe5ec"]]);
const Message = ({ text, type, timeout, icon, textColor, bgColor, customClass }) => {
  const div = typeof document !== "undefined" ? typeof document.createElement !== "undefined" ? document.createElement("div") : "" : "";
  div.setAttribute("class", "yuan-meassage-container");
  if (typeof document !== "undefined") {
    document.body.appendChild(div);
  }
  let timer = null;
  const vnode = createVNode(mMessage, { text, type, timeout, icon, textColor, bgColor, customClass }, [text]);
  render(vnode, div);
  clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, div);
    if (typeof document !== "undefined") {
      document.body.removeChild(div);
    }
    clearTimeout(timer);
  }, timeout || 2500);
};
const index_vue_vue_type_style_index_0_scoped_d3e5ac0b_lang = "";
const _hoisted_1$m = { class: "yuan-wrapper" };
const _hoisted_2$g = { class: "yuan-header" };
const _hoisted_3$a = { class: "yuan-body" };
const _hoisted_4$8 = { class: "yuan-footer" };
const _sfc_main$s = {
  __name: "index",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "m-icon-warning"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmShow: {
      type: Boolean,
      default: true
    },
    cancelShow: {
      type: Boolean,
      default: true
    },
    closeShow: {
      type: Boolean,
      default: true
    },
    customClass: String,
    // 确认按钮
    confirmCallback: {
      type: Function,
      default: () => {
      }
    },
    // 取消按钮
    cancelCallback: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(__props) {
    const isShow = ref$2(false);
    onMounted(() => {
      isShow.value = true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          isShow.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["yuan-confirm", __props.customClass])
          }, [
            createElementVNode("div", _hoisted_1$m, [
              createElementVNode("div", _hoisted_2$g, [
                createElementVNode("h3", null, toDisplayString(__props.title), 1),
                __props.closeShow ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: "JavaScript:;",
                  class: "m-icon-close",
                  onClick: _cache[0] || (_cache[0] = (...args) => __props.cancelCallback && __props.cancelCallback(...args))
                })) : createCommentVNode("", true)
              ]),
              createElementVNode("div", _hoisted_3$a, [
                createElementVNode("i", {
                  class: normalizeClass(["icon-warning", __props.icon])
                }, null, 2),
                createElementVNode("span", null, toDisplayString(__props.text), 1)
              ]),
              createElementVNode("div", _hoisted_4$8, [
                __props.cancelShow ? (openBlock(), createBlock(unref(_sfc_main$A), {
                  key: 0,
                  onClick: __props.cancelCallback,
                  size: "small",
                  style: { "margin-right": "10px" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.cancelText), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                __props.confirmShow ? (openBlock(), createBlock(unref(_sfc_main$A), {
                  key: 1,
                  onClick: __props.confirmCallback,
                  size: "small",
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.confirmText), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const mConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-d3e5ac0b"]]);
const divNode = createVNode("div", { class: "yuan-confirm-container" });
render(divNode, typeof document !== "undefined" ? document.body : "");
const container = divNode.el;
const Confirm = ({ title, text, icon, confirmText, cancelText, confirmShow, cancelShow, closeShow, customClass }) => {
  if (typeof document !== "undefined") {
    document.body.style = "overflow:hidden";
  }
  return new Promise((resolve, reject) => {
    const confirmCallback = () => {
      resolve();
      render(null, container);
      if (typeof document !== "undefined") {
        document.body.style = "overflow:initial";
      }
    };
    const cancelCallback = () => {
      reject();
      render(null, container);
      if (typeof document !== "undefined") {
        document.body.style = "overflow:initial";
      }
    };
    const VNode = createVNode(mConfirm, { title, text, icon, confirmText, cancelText, confirmShow, cancelShow, closeShow, customClass, confirmCallback, cancelCallback });
    render(VNode, container);
  });
};
const index_vue_vue_type_style_index_0_scoped_e3ad9de6_lang = "";
const _hoisted_1$l = { class: "yuan-modal-header" };
const _hoisted_2$f = { key: 1 };
const _hoisted_3$9 = { class: "yuan-modal-content" };
const _sfc_main$r = /* @__PURE__ */ Object.assign({
  name: "mModal"
}, {
  __name: "index",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    modelValue: Boolean,
    align: {
      type: String,
      default: ""
    },
    scrollLock: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: "35%"
    },
    top: {
      type: String,
      default: "15%"
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnModal: {
      type: Boolean,
      default: true
    },
    customClass: String
  },
  emits: ["update:modelValue", "close"],
  setup(__props, { emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const $slot = useSlots$1();
    const close = () => {
      emit("close");
      emit("update:modelValue", false);
    };
    onMounted(() => {
      watchEffect$1(() => {
        if (props2.modelValue) {
          if (props2.scrollLock) {
            if (typeof document !== "undefined") {
              document.body.style["overflow"] = "hidden";
            }
          }
        } else {
          if (typeof document !== "undefined") {
            document.body.style["overflow"] = "initial";
          }
        }
      });
    });
    const closeModal = (e) => {
      if (props2.closeOnModal) {
        if (e.target.className == "yuan-modal-default") {
          emit("update:modelValue", false);
          emit("close");
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["yuan-modal-default", __props.customClass]),
              onClick: _cache[0] || (_cache[0] = ($event) => closeModal($event))
            }, [
              createElementVNode("div", {
                class: "yuan-modal-contentbox",
                style: normalizeStyle({ "width": __props.width, "top": __props.top })
              }, [
                createElementVNode("div", _hoisted_1$l, [
                  createElementVNode("p", {
                    class: "yuan-modal-title",
                    style: normalizeStyle({ "text-align": __props.align == "center" ? __props.align : "" })
                  }, [
                    unref($slot)["header"] ? renderSlot(_ctx.$slots, "header", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("span", _hoisted_2$f, toDisplayString(__props.title), 1))
                  ], 4),
                  __props.showClose ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "yuan-modal-close m-icon-close",
                    onClick: close
                  })) : createCommentVNode("", true)
                ]),
                createElementVNode("div", _hoisted_3$9, [
                  renderSlot(_ctx.$slots, "content", {}, void 0, true)
                ]),
                createElementVNode("div", {
                  class: "yuan-modal-footer",
                  style: normalizeStyle({ "text-align": __props.align == "center" ? __props.align : "" })
                }, [
                  renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                ], 4)
              ], 4)
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
});
const mModal = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-e3ad9de6"]]);
mModal.install = (app) => {
  app.component(mModal.name, mModal);
};
const index_vue_vue_type_style_index_0_scoped_3ba48437_lang = "";
const _hoisted_1$k = { class: "yuan-drawer-contain-box" };
const _hoisted_2$e = { key: 2 };
const _hoisted_3$8 = {
  key: 3,
  class: "yuan-drawer-header-btn"
};
const _hoisted_4$7 = {
  key: 1,
  class: "yuan-drawer-contain-box-footer"
};
const _hoisted_5$5 = { key: 1 };
const _sfc_main$q = /* @__PURE__ */ Object.assign({
  name: "mDrawer"
}, {
  __name: "index",
  props: {
    modelValue: Boolean,
    title: {
      type: String,
      default: "标题"
    },
    width: {
      type: String,
      default: "30%"
    },
    height: {
      type: String,
      default: "40%"
    },
    direction: {
      type: String,
      default: "left"
    },
    closeOnModal: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmShow: {
      type: Boolean,
      default: true
    },
    cancelShow: {
      type: Boolean,
      default: true
    },
    customClass: String
  },
  emits: ["update:modelValue", "close", "confirm", "cancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    const $slot = useSlots$1();
    const styles = computed$1(() => {
      return [
        props2.direction == "left" ? { "top": 0, "left": 0, "width": props2.width, "height": "100%" } : props2.direction == "top" ? { "top": 0, "left": 0, "width": "100%", "height": props2.height } : props2.direction == "right" ? { "top": 0, "right": 0, "width": props2.width, "height": "100%" } : props2.direction == "bottom" ? { "bottom": 0, "left": 0, "width": "100%", "height": props2.height } : {}
      ];
    });
    const animateName = computed$1(() => {
      return props2.direction == "left" ? "slide-left" : props2.direction == "top" ? "slide-top" : props2.direction == "right" ? "slide-right" : props2.direction == "bottom" ? "slide-bottom" : "";
    });
    const close = () => {
      emit("update:modelValue", false);
      emit("close");
    };
    const confirmBtn = () => {
      emit("confirm");
    };
    const cancelBtn = () => {
      emit("cancel");
    };
    watchEffect$1(() => {
      if (props2.modelValue) {
        if (typeof document !== "undefined") {
          document.body.style = "overflow:hidden";
        }
      } else {
        if (typeof document !== "undefined") {
          document.body.style = "overflow:initial";
        }
      }
    });
    const closeOfModal = (e) => {
      if (props2.closeOnModal) {
        if (e.target.className == "yuan-drawer-pupop") {
          emit("update:modelValue", false);
          emit("close");
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, { name: "fade-pupop" }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "yuan-drawer-pupop",
              onClick: _cache[0] || (_cache[0] = ($event) => closeOfModal($event))
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: animateName.value }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["yuan-drawer-contain", __props.customClass]),
              style: normalizeStyle(styles.value)
            }, [
              createElementVNode("div", _hoisted_1$k, [
                __props.showHeader ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "yuan-drawer-contain-box-header",
                  style: normalizeStyle({ "padding": __props.showClose ? "0 20px 0 45px" : "0 20px 0 20px" })
                }, [
                  unref($slot)["header"] ? renderSlot(_ctx.$slots, "header", { key: 0 }, void 0, true) : createCommentVNode("", true),
                  __props.showClose ? (openBlock(), createElementBlock("i", {
                    key: 1,
                    class: "m-icon-close",
                    onClick: close
                  })) : createCommentVNode("", true),
                  !unref($slot)["header"] ? (openBlock(), createElementBlock("span", _hoisted_2$e, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                  !unref($slot)["header"] ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
                    __props.cancelShow ? (openBlock(), createBlock(unref(_sfc_main$A), {
                      key: 0,
                      size: "small",
                      style: normalizeStyle({ "margin-right": __props.confirmShow ? "10px" : "0" }),
                      onClick: cancelBtn
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.cancelText), 1)
                      ]),
                      _: 1
                    }, 8, ["style"])) : createCommentVNode("", true),
                    __props.confirmShow ? (openBlock(), createBlock(unref(_sfc_main$A), {
                      key: 1,
                      size: "small",
                      type: "primary",
                      onClick: confirmBtn
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.confirmText), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ], 4)) : createCommentVNode("", true),
                createElementVNode("div", {
                  class: "yuan-drawer-contain-box-content",
                  style: normalizeStyle({ "height": __props.showHeader ? __props.showFooter ? "calc(100% - 110px)" : "calc(100% - 55px)" : __props.showFooter ? "calc(100% - 55px)" : "100%" })
                }, [
                  renderSlot(_ctx.$slots, "content", {}, void 0, true)
                ], 4),
                __props.showFooter ? (openBlock(), createElementBlock("div", _hoisted_4$7, [
                  unref($slot)["footer"] ? renderSlot(_ctx.$slots, "footer", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("span", _hoisted_5$5, "你，我生命中一个重要的过客，之所以是过客，因为你未曾为我停留！"))
                ])) : createCommentVNode("", true)
              ])
            ], 6)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 64);
    };
  }
});
const mDrawer = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-3ba48437"]]);
mDrawer.install = (app) => {
  app.component(mDrawer.name, mDrawer);
};
const index_vue_vue_type_style_index_0_scoped_123e29f8_lang = "";
const index_vue_vue_type_style_index_1_lang = "";
const _hoisted_1$j = ["src"];
const _hoisted_2$d = { key: 2 };
const _sfc_main$p = {
  __name: "index",
  props: {
    obj: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade-pupop" }, {
        default: withCtx(() => [
          __props.obj.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "yuan-loading",
            style: normalizeStyle({ "position": __props.obj.position, "background-color": __props.obj.bgColor })
          }, [
            createElementVNode("div", {
              style: normalizeStyle({ color: __props.obj.textColor }),
              class: "yuan-loading-center"
            }, [
              __props.obj.showIcon && __props.obj.img == "" ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(["loading-icon", __props.obj.icon])
              }, null, 2)) : createCommentVNode("", true),
              __props.obj.img != "" ? (openBlock(), createElementBlock("img", {
                key: 1,
                src: __props.obj.img,
                alt: "",
                class: "loading-img"
              }, null, 8, _hoisted_1$j)) : createCommentVNode("", true),
              __props.obj.text != "" ? (openBlock(), createElementBlock("span", _hoisted_2$d, toDisplayString(__props.obj.text), 1)) : createCommentVNode("", true)
            ], 4)
          ], 4)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const mLoading = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-123e29f8"]]);
const obj = reactive$2({
  show: false,
  text: "加载中...",
  icon: "m-icon-loading1",
  img: "",
  target: "body",
  textColor: "#fff",
  bgColor: "rgba(0, 0, 0, 0.6)",
  showIcon: true,
  position: "fixed",
  scrollLock: true
});
const $loading = createApp(mLoading, { obj }).mount(typeof document !== "undefined" ? typeof document.createElement !== "undefined" ? document.createElement("div") : "" : "");
const Loading = {
  show(data) {
    obj.show = true;
    if (data != void 0) {
      obj.text = data.text != void 0 ? data.text : obj.text;
      obj.target = data.target != void 0 ? data.target : obj.target;
      obj.scrollLock = data.scrollLock != void 0 ? data.scrollLock : obj.scrollLock;
      obj.icon = data.icon != void 0 ? data.icon == "m-icon-loading1" || data.icon == "m-icon-loading2" || data.icon == "m-icon-loading3" || data.icon == "m-icon-loading4" || data.icon == "m-icon-loading5" || data.icon == "m-icon-loading6" ? data.icon : obj.icon : obj.icon;
      obj.textColor = data.textColor != void 0 ? data.textColor : obj.textColor;
      obj.bgColor = data.bgColor != void 0 ? data.bgColor : obj.bgColor;
      obj.showIcon = data.showIcon != void 0 ? data.showIcon : obj.showIcon;
      obj.img = data.img != void 0 ? data.img : obj.img;
      watchEffect$1(() => {
        if (data.target != void 0) {
          if (obj.scrollLock) {
            if (typeof document !== "undefined") {
              document.querySelector(data.target).classList.add("yuan-loading-parentClass");
            }
          } else {
            setTimeout(() => {
              if (typeof document !== "undefined") {
                document.querySelector(data.target).classList.remove("yuan-loading-parentClass");
              }
            }, 500);
          }
        } else {
          if (obj.scrollLock) {
            if (typeof document !== "undefined") {
              document.body.classList.add("yuan-loading-parentClass");
            }
          } else {
            if (typeof document !== "undefined") {
              document.body.classList.remove("yuan-loading-parentClass");
            }
          }
        }
      });
      if (data.target != void 0) {
        if (typeof document !== "undefined") {
          document.querySelector(data.target).appendChild($loading.$el);
        }
        obj.position = "absolute";
      } else {
        if (typeof document !== "undefined") {
          document.body.appendChild($loading.$el);
        }
        obj.position = "fixed";
      }
    } else {
      if (typeof document !== "undefined") {
        document.body.appendChild($loading.$el);
      }
    }
  },
  hide() {
    obj.show = false;
    if (obj.target != "body") {
      setTimeout(() => {
        if (typeof document !== "undefined") {
          document.querySelector(obj.target).classList.remove("yuan-loading-parentClass");
        }
      }, 500);
    } else {
      if (typeof document !== "undefined") {
        document.body.classList.remove("yuan-loading-parentClass");
      }
    }
  }
};
const index_vue_vue_type_style_index_0_scoped_5e20cd49_lang = "";
const _sfc_main$o = /* @__PURE__ */ Object.assign({
  name: "mSwitch"
}, {
  __name: "index",
  props: {
    modelValue: Boolean,
    width: {
      type: Number,
      default: 45
    },
    closeColor: {
      type: String,
      default: "#BFBFBF"
    },
    activeColor: {
      type: String,
      default: "#0e80eb"
    },
    closeText: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    textAlign: {
      type: String,
      default: "left"
    },
    showTipsText: Boolean,
    disabled: Boolean,
    customClass: String
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    const roundStyle = reactive({ "left": "2px" });
    const flagTextStyle = reactive({ "left": props2.width - 20 + "px" });
    const switchStyle = reactive({ "background": props2.closeColor });
    const flagText = ref("关");
    const switchText = ref(props2.modelValue ? props2.activeText : props2.closeText);
    const flag = ref(props2.modelValue);
    const handleSwitch = () => {
      if (!props2.disabled) {
        flag.value = !flag.value;
        emit("update:modelValue", flag.value);
        emit("change", flag.value);
      }
    };
    watchEffect(() => {
      roundStyle.left = props2.modelValue ? props2.width - 20 + "px" : "2px";
      flagTextStyle.left = props2.modelValue ? "6px" : props2.width - 20 + "px";
      switchStyle.background = props2.modelValue ? props2.activeColor : props2.closeColor;
      if (props2.modelValue) {
        flagText.value = "开";
        switchText.value = props2.activeText;
      } else {
        flagText.value = "关";
        switchText.value = props2.closeText;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yuan-switch-default", __props.customClass])
      }, [
        __props.textAlign == "left" && __props.closeText != "" && __props.activeText != "" ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "yuan-switch-left-text",
          style: normalizeStyle({ "color": __props.modelValue ? __props.activeColor : __props.closeColor })
        }, toDisplayString(unref(switchText)), 5)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["yuan-switch-content", { "yuan-switch-disabled": __props.disabled }]),
          onClick: handleSwitch,
          style: normalizeStyle([unref(switchStyle), { "width": __props.width + "px" }])
        }, [
          createElementVNode("span", {
            class: "yuan-switch-round",
            style: normalizeStyle([unref(roundStyle)])
          }, null, 4),
          __props.showTipsText ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "yuan-switch-flagtext",
            style: normalizeStyle(unref(flagTextStyle))
          }, toDisplayString(unref(flagText)), 5)) : createCommentVNode("", true)
        ], 6),
        __props.textAlign == "right" && __props.closeText != "" && __props.activeText != "" ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "yuan-switch-right-text",
          style: normalizeStyle({ "color": __props.modelValue ? __props.activeColor : __props.closeColor })
        }, toDisplayString(unref(switchText)), 5)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const mSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-5e20cd49"]]);
mSwitch.install = (app) => {
  app.component(mSwitch.name, mSwitch);
};
const treeItem_vue_vue_type_style_index_0_scoped_7e12dedd_lang = "";
const _hoisted_1$i = {
  class: /* @__PURE__ */ normalizeClass(["yuan-tree-item-box"])
};
const _hoisted_2$c = ["data-key"];
const _hoisted_3$7 = { class: "yuan-tree-label" };
const _hoisted_4$6 = {
  key: 0,
  class: "yuan-tree-ul-box"
};
const _sfc_main$n = {
  __name: "treeItem",
  props: {
    items: {
      type: Object,
      default: () => {
      }
    },
    dataKey: String | Number,
    index: Number,
    icon: {
      type: String,
      default: "m-icon-arrow-right-filling"
    },
    defaultOpenNodes: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    tabIndexs: String | Number,
    multiple: Boolean,
    defaultSelectNodes: {
      type: Array,
      default: () => []
    }
  },
  emits: ["nodeClick", "change", "selectClick"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "v28ffdce6": height.value
    }));
    const emit = __emit;
    const props2 = __props;
    props2.items.key = props2.dataKey;
    const height = ref$2("26px");
    const selectedLen = ref$2(0);
    const selectList = ref$2([]);
    var recursiveFunction = function(items) {
      var str = "";
      const getStr = function(items2) {
        if (items2.isOpen) {
          items2.children.forEach((v, i) => {
            if (v.children) {
              getStr(v);
              str += v.label + ";";
            } else {
              str += v.label + ";";
            }
          });
        }
      };
      getStr(items);
      return str.split(";");
    };
    const isFolder = computed$1(() => {
      return props2.children.items && props2.items.children.length;
    });
    const toggle = (item) => {
      if (!item.disabled) {
        if (isFolder && item.children && item.children.length) {
          item.isOpen = !item.isOpen;
          if (!item.isOpen) {
            setTimeout(() => {
              height.value = "26px";
            }, 100);
          } else {
            height.value = (recursiveFunction(item).length - 1) * 26 + "px";
          }
        }
        emit("nodeClick", item);
        emit("change", item.key);
      }
    };
    const outClick = (item, e) => {
      emit("nodeClick", item);
      emit("change", item.key);
    };
    const getParents = (option, key) => {
      for (var i in option) {
        if (option[i].key == key) {
          return [option[i]];
        }
        if (option[i].children) {
          var ro = getParents(option[i].children, key);
          if (ro !== void 0) {
            return ro.concat(option[i]);
          }
        }
      }
    };
    const setSelectted = (item, flag) => {
      item.forEach((v, i) => {
        v.isSelected = flag;
        if (v.children) {
          setSelectted(v.children, flag);
        }
      });
    };
    let n = 0;
    const isParentSel = (item) => {
      item.forEach((v, i) => {
        n += 1;
        if (v.isSelected) {
          selectedLen.value += 1;
        }
        if (v.children) {
          isParentSel(v.children);
        }
      });
    };
    const getSameLevelChile = (item, item1) => {
      let n1 = 0;
      item.children.forEach((v, i) => {
        if (v.isSelected) {
          n1 += 1;
        }
      });
      isParentSel(item1.children);
      if (n1 == item.children.length) {
        selectedLen.value + 1;
        item.isSelected = true;
        item.semiSelected = false;
      } else if (n1 == 0) {
        item.isSelected = false;
        item.semiSelected = false;
      } else {
        item.semiSelected = true;
      }
      if (selectedLen.value == n) {
        item1.isSelected = true;
        item1.semiSelected = false;
      } else if (selectedLen.value == 0) {
        item1.isSelected = false;
        item1.semiSelected = false;
      } else {
        item1.isSelected = false;
        item1.semiSelected = true;
      }
    };
    const getIsSelectNode = (option) => {
      option.forEach((v, i) => {
        if (v.isSelected) {
          selectList.value.push(v);
        }
        if (v.children) {
          getIsSelectNode(v.children);
        }
      });
      return selectList.value;
    };
    const selectClick = (item, index) => {
      if (!item.disabled) {
        item.isSelected = !item.isSelected;
        item.semiSelected = false;
        selectList.value = [];
        let nodeItems = getParents(props2.options, item.key);
        if (item.isSelected) {
          if (item.children) {
            setSelectted(item.children, true);
          }
          if (nodeItems.length > 1) {
            n = selectedLen.value = 0;
            getSameLevelChile(nodeItems[1], nodeItems[nodeItems.length - 1]);
          }
        } else {
          if (item.children) {
            setSelectted(item.children, false);
          }
          if (nodeItems.length > 1) {
            n = selectedLen.value = 0;
            getSameLevelChile(nodeItems[1], nodeItems[nodeItems.length - 1]);
          }
        }
        emit("selectClick", item);
        emit("nodeClick", getIsSelectNode(props2.options));
      }
    };
    const setSelect = (option, key) => {
      option.forEach((v, i) => {
        if (v.key == key) {
          v.isSelected = true;
        }
        if (v.children) {
          setSelect(v.children, key);
        }
      });
    };
    onMounted(() => {
      if (props2.defaultOpenNodes && props2.defaultOpenNodes.length) {
        props2.defaultOpenNodes.forEach((v, i) => {
          getParents(props2.options, v).forEach((item, index) => {
            item.isOpen = true;
            setTimeout(() => {
              if (item.children) {
                height.value = (recursiveFunction(item).length - 1) * 26 + "px";
              }
            }, 100);
          });
        });
      }
      if (props2.multiple) {
        if (props2.defaultSelectNodes && props2.defaultSelectNodes.length) {
          props2.defaultSelectNodes.forEach((v, i) => {
            setSelect(props2.options, v);
            getParents(props2.options, v).forEach((item, index) => {
              item.isOpen = true;
              setTimeout(() => {
                if (item.children) {
                  height.value = (recursiveFunction(item).length - 1) * 26 + "px";
                }
              }, 100);
            });
            let nodeItems = getParents(props2.options, v);
            getSameLevelChile(nodeItems[1], nodeItems[nodeItems.length - 1]);
          });
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_tree_item = resolveComponent("tree-item", true);
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        createElementVNode("li", null, [
          createElementVNode("div", {
            class: normalizeClass(["yuan-tree-lable-box", { "label-active": __props.tabIndexs === __props.items.key, "yuan-tree-lable-disabled": __props.items.disabled }]),
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => toggle(__props.items), ["stop", "prevent"])),
            "data-key": __props.dataKey,
            style: normalizeStyle({ "padding-left": __props.index * 15 + "px" })
          }, [
            createElementVNode("span", {
              class: normalizeClass([{ rotate: __props.icon != "m-icon-arrow-right-filling" ? false : __props.items.isOpen }, "yuan-tree-lable-span"])
            }, [
              createElementVNode("i", {
                class: normalizeClass([{ "m-icon-arrow-right-filling": __props.items.children && __props.items.children.length }])
              }, null, 2)
            ], 2),
            __props.multiple ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(["yuan-tree-label-select-span", { "yuan-tree-label-select-span-active": __props.items.isSelected, "yuan-tree-label-select-span-active-1": __props.items.semiSelected }]),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => selectClick(__props.items, __props.index), ["stop"]))
            }, null, 2)) : createCommentVNode("", true),
            createElementVNode("span", _hoisted_3$7, toDisplayString(__props.items.label), 1)
          ], 14, _hoisted_2$c),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              __props.items.children && __props.items.children.length ? withDirectives((openBlock(), createElementBlock("div", _hoisted_4$6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items.children, (v, i) => {
                  return openBlock(), createBlock(_component_tree_item, {
                    key: i,
                    items: v,
                    "data-key": __props.dataKey + "-" + i,
                    defaultOpenNodes: __props.defaultOpenNodes,
                    icon: __props.icon,
                    onNodeClick: _cache[2] || (_cache[2] = ($event) => outClick($event, __props.items)),
                    options: __props.options,
                    index: __props.index + 1,
                    tabIndexs: __props.tabIndexs,
                    onSelectClick: _cache[3] || (_cache[3] = ($event) => emit("selectClick", $event)),
                    multiple: __props.multiple,
                    defaultSelectNodes: __props.defaultSelectNodes
                  }, null, 8, ["items", "data-key", "defaultOpenNodes", "icon", "options", "index", "tabIndexs", "multiple", "defaultSelectNodes"]);
                }), 128))
              ], 512)), [
                [vShow, __props.items.isOpen]
              ]) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const treeItem = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-7e12dedd"]]);
const _sfc_main$m = /* @__PURE__ */ Object.assign({
  name: "mTree"
}, {
  __name: "index",
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    icon: String,
    defaultOpenNodes: Array,
    customClass: String,
    multiple: Boolean,
    defaultSelectNodes: {
      type: Array,
      default: () => []
    }
  },
  emits: ["nodeClick", "selectClick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    props2.options.forEach((item, index) => {
      item.key = index.toString();
    });
    const tabKey = ref$2("");
    const changeKey = (e) => {
      tabKey.value = e;
    };
    const nClick = (item) => {
      emit("nodeClick", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yuan-tree-content-box", __props.customClass])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index) => {
          return openBlock(), createBlock(treeItem, {
            key: index,
            items: item,
            "data-key": index,
            icon: __props.icon,
            defaultOpenNodes: __props.defaultOpenNodes,
            onNodeClick: _cache[0] || (_cache[0] = ($event) => nClick($event)),
            options: __props.options,
            index: 0,
            onChange: _cache[1] || (_cache[1] = ($event) => changeKey($event)),
            tabIndexs: tabKey.value,
            onSelectClick: _cache[2] || (_cache[2] = ($event) => emit("selectClick", $event)),
            multiple: __props.multiple,
            defaultSelectNodes: __props.defaultSelectNodes
          }, null, 8, ["items", "data-key", "icon", "defaultOpenNodes", "options", "tabIndexs", "multiple", "defaultSelectNodes"]);
        }), 128))
      ], 2);
    };
  }
});
_sfc_main$m.install = (app) => {
  app.component(_sfc_main$m.name, _sfc_main$m);
};
const index_vue_vue_type_style_index_0_scoped_fd83a6d8_lang = "";
const _hoisted_1$h = ["accept", "multiple"];
const _hoisted_2$b = { class: "yuan-preview-img-box" };
const _hoisted_3$6 = { class: "yuan-previre-img-actions" };
const _hoisted_4$5 = ["src"];
const _hoisted_5$4 = { class: "customArea" };
const _hoisted_6$3 = ["onClick"];
const _hoisted_7$2 = { class: "yuan-optfile-text-pos" };
const _hoisted_8$2 = { key: 0 };
const _hoisted_9$1 = {
  key: 0,
  class: "yuan-optfile-filelist"
};
const _hoisted_10$1 = ["onClick"];
const __default__$2 = {
  name: "mOptfile"
};
const _sfc_main$l = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    accept: String,
    multiple: Boolean,
    type: String,
    label: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    targetType: {
      type: String,
      default: "btn"
    },
    icon: {
      type: String,
      default: "m-icon-add-bold"
    },
    fileList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    drop: Boolean,
    customClass: String,
    showFileList: Boolean,
    imgListShow: Boolean
  },
  emits: ["change", "update:fileList", "beforeChange"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    const $slot = useSlots$1();
    const windowURL = typeof window !== "undefined" ? window.URL || window.webkitURL : "";
    const File = reactive$2([]);
    const FileList = reactive$2(props2.fileList || []);
    ref$2("");
    const lableText = ref$2(props2.label);
    const activeFile = ref$2(false);
    const refInp = ref$2(null);
    const refDiv = ref$2(null);
    const changeFile = () => {
      emit("beforeChange");
      console.log(refInp);
      refInp.value.click();
    };
    const testchange = (e) => {
      File.unshift(...e.target.files);
      FileList.unshift(...e.target.files);
      File.forEach((item, index) => {
        item.preImgUrl = windowURL.createObjectURL(item);
      });
      emit("change", File);
      emit("update:fileList", File);
    };
    const deleteImg = (index) => {
      File.splice(index, 1);
      FileList.splice(index, 1);
      emit("update:fileList", File);
    };
    onMounted(() => {
      if (props2.drop && props2.targetType == "box") {
        let dropArea = refDiv.value;
        dropArea.addEventListener("drop", (e) => {
          e.stopPropagation();
          e.preventDefault();
          File.unshift(...e.dataTransfer.files);
          FileList.unshift(...e.dataTransfer.files);
          File.forEach((item, index) => {
            item.preImgUrl = windowURL.createObjectURL(item);
          });
          emit("change", File);
          emit("update:fileList", File);
          lableText.value = props2.label;
          activeFile.value = false;
        }, false);
        dropArea.addEventListener("dragleave", (e) => {
          e.stopPropagation();
          e.preventDefault();
          activeFile.value = false;
          lableText.value = props2.label;
        });
        dropArea.addEventListener("dragenter", (e) => {
          e.stopPropagation();
          e.preventDefault();
          activeFile.value = true;
          lableText.value = "松开鼠标完成";
          emit("beforeChange");
        });
        dropArea.addEventListener("dragover", (e) => {
          e.stopPropagation();
          e.preventDefault();
          activeFile.value = true;
          lableText.value = "松开鼠标完成";
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yuan-optfile-default", __props.customClass])
      }, [
        createElementVNode("input", {
          type: "file",
          accept: __props.accept,
          multiple: __props.multiple,
          onChange: testchange,
          hidden: "",
          ref_key: "refInp",
          ref: refInp
        }, null, 40, _hoisted_1$h),
        createElementVNode("div", _hoisted_2$b, [
          createVNode(TransitionGroup, { name: "list-img" }, {
            default: withCtx(() => [
              __props.targetType == "box" && __props.imgListShow && !__props.showFileList ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(File, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "yuan-preview-img-img",
                  key: index
                }, [
                  createElementVNode("div", _hoisted_3$6, [
                    createElementVNode("img", {
                      src: item.preImgUrl,
                      alt: ""
                    }, null, 8, _hoisted_4$5),
                    createElementVNode("div", _hoisted_5$4, [
                      unref($slot)["defalut"] ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("i", {
                        key: 1,
                        class: "customIcon m-icon-ashbin",
                        onClick: ($event) => deleteImg(index)
                      }, null, 8, _hoisted_6$3))
                    ])
                  ])
                ]);
              }), 128)) : createCommentVNode("", true)
            ]),
            _: 3
          }),
          __props.targetType == "btn" ? (openBlock(), createBlock(unref(_sfc_main$A), {
            key: 0,
            type: __props.type,
            leftIcon: __props.icon,
            onClick: changeFile
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.label), 1)
            ]),
            _: 1
          }, 8, ["type", "leftIcon"])) : createCommentVNode("", true),
          __props.targetType == "box" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["yuan-optfie-area", { "yuan-optfie-area-big": __props.size == "big", "yuan-opfile-area-active": activeFile.value }]),
            ref_key: "refDiv",
            ref: refDiv
          }, [
            createElementVNode("div", {
              class: "yuan-optfile-area-text",
              onClick: changeFile
            }, [
              createElementVNode("div", _hoisted_7$2, [
                createElementVNode("i", {
                  class: normalizeClass([__props.icon, "icon-file"])
                }, null, 2),
                __props.label != "" ? (openBlock(), createElementBlock("p", _hoisted_8$2, toDisplayString(lableText.value), 1)) : createCommentVNode("", true)
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        FileList.length > 0 && __props.showFileList ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
          createElementVNode("ul", null, [
            createVNode(TransitionGroup, { name: "list" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(FileList, (item, index) => {
                  return openBlock(), createElementBlock("li", { key: index }, [
                    createElementVNode("div", null, [
                      _cache[0] || (_cache[0] = createElementVNode("i", { class: "file-icon m-icon-file" }, null, -1)),
                      createElementVNode("span", null, toDisplayString(item.name), 1),
                      createElementVNode("i", {
                        class: "delete m-icon-ashbin",
                        onClick: ($event) => deleteImg(index)
                      }, null, 8, _hoisted_10$1)
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const mOptfile = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-fd83a6d8"]]);
mOptfile.install = (app) => {
  app.component(mOptfile.name, mOptfile);
};
const index_vue_vue_type_style_index_0_scoped_358304f1_lang = "";
const _hoisted_1$g = ["form", "cols", "rows", "placeholder", "maxlength", "value", "disabled", "readonly"];
const _hoisted_2$a = {
  key: 0,
  class: "max-length-box"
};
const _sfc_main$k = /* @__PURE__ */ Object.assign({
  name: "mTextarea"
}, {
  __name: "index",
  props: {
    modelValue: String,
    customClass: String,
    placeholder: String,
    disabled: Boolean,
    resize: {
      type: Boolean,
      default: true
    },
    form: String,
    rows: {
      type: Number,
      default: 4
    },
    cols: {
      type: Number,
      default: 50
    },
    readonly: Boolean,
    maxlength: Number,
    focusColor: {
      type: String,
      default: "#0e80eb"
    }
  },
  emits: ["update:modelValue", "focus", "blur", "input"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    const textareayuan = ref$2(null);
    const n = ref$2(props2.modelValue.length || 0);
    const tStyle = ref$2({ "resize": props2.resize ? "auto" : "none", "border-color": "" });
    const input = () => {
      emit("update:modelValue", textareayuan.value.value);
      n.value = textareayuan.value.value.length;
      if (n.value >= props2.maxlength) {
        n.value = props2.maxlength;
      }
      emit("input", textareayuan.value.value);
    };
    const focus = (e) => {
      emit("focus", e.target.value);
      tStyle.value["border-color"] = props2.focusColor;
    };
    const blur = (e) => {
      emit("blur", e.target.value);
      tStyle.value["border-color"] = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yuan-textarea-default", __props.customClass, { "yuan-textarea-disabled": __props.disabled }])
      }, [
        createElementVNode("textarea", {
          form: __props.form,
          cols: __props.cols,
          rows: __props.rows,
          placeholder: __props.placeholder,
          maxlength: __props.maxlength,
          value: __props.modelValue,
          onInput: input,
          ref_key: "textareayuan",
          ref: textareayuan,
          disabled: __props.disabled,
          style: normalizeStyle(tStyle.value),
          onFocus: focus,
          onBlur: blur,
          readonly: __props.readonly
        }, null, 44, _hoisted_1$g),
        __props.maxlength != void 0 && __props.maxlength > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$a, toDisplayString(`${n.value}/${__props.maxlength}`), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const mTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-358304f1"]]);
mTextarea.install = (app) => {
  app.component(mTextarea.name, mTextarea);
};
const index_vue_vue_type_style_index_0_scoped_b67e1fa5_lang = "";
const _hoisted_1$f = { class: "yuan-row-default" };
const _sfc_main$j = /* @__PURE__ */ Object.assign({
  name: "mRow"
}, {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const mRow = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-b67e1fa5"]]);
mRow.install = (app) => {
  app.component(mRow.name, mRow);
};
const index_vue_vue_type_style_index_0_scoped_c4fc1887_lang = "";
const _hoisted_1$e = { class: "yuan-col-default" };
const _sfc_main$i = /* @__PURE__ */ Object.assign({
  name: "mCol"
}, {
  __name: "index",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "v034ae4fc": width.value,
      "v5841941d": offset.value
    }));
    const props2 = __props;
    const width = ref$2(props2.span <= 24 ? props2.span % 1 == 0 ? 100 / 24 * props2.span + "%" : "" : "");
    const offset = ref$2(props2.offset <= 24 ? props2.offset % 1 == 0 ? 100 / 24 * props2.offset + "%" : "" : "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const mCol = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-c4fc1887"]]);
mCol.install = (app) => {
  app.component(mCol.name, mCol);
};
const index_vue_vue_type_style_index_0_scoped_ee6a538a_lang = "";
const _hoisted_1$d = { class: "yuan-pagination-inlinebox" };
const _hoisted_2$9 = { class: "yuan-pagination-pagebox" };
const _hoisted_3$5 = {
  key: 0,
  class: "yuan-total"
};
const _hoisted_4$4 = ["onClick"];
const _hoisted_5$3 = {
  key: 5,
  class: "to-next-page-box"
};
const _hoisted_6$2 = { class: "input-span" };
const _sfc_main$h = /* @__PURE__ */ Object.assign({
  name: "mPagination"
}, {
  __name: "index",
  props: {
    total: Number,
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    maxSize: {
      type: Number,
      default: 10
    },
    align: {
      type: String,
      default: "left"
    },
    prevText: String,
    nextText: String,
    disabled: Boolean,
    activeColors: {
      type: Object,
      default: () => {
        return {
          "background": "#fff",
          "hoverBackground": "#fff",
          "borderColor": "#d9d9d9",
          "hoverBorderColor": "#0e80eb",
          "color": "#505050",
          "hoverColor": "#0e80eb"
        };
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "default"
    },
    showTotal: Boolean,
    jumper: Boolean
  },
  emits: ["update:current", "change"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "v298dc796": border.value ? "1px solid #d9d9d9" : _ctx.none,
      "v708e1361": colors.value.borderColor,
      "v7ed8c8a6": colors.value.color,
      "v9a53f1b8": colors.value.background,
      "v6f9e6931": colors.value.hoverBorderColor,
      "v10cc8d7d": colors.value.hoverColor,
      "v687bb754": colors.value.hoverBackground
    }));
    const emit = __emit;
    const props2 = __props;
    const currentPage = ref$2(props2.current || 0);
    const marginLeft = ref$2(0);
    const colors = ref$2(props2.activeColors);
    const border = ref$2(props2.border);
    const prevChange = () => {
      if (!props2.disabled) {
        if (currentPage.value > 1) {
          currentPage.value -= 1;
          emit("update:current", currentPage.value);
          emit("change", currentPage.value);
          if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
            if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
              marginLeft.value += props2.size == "small" ? 32 : 36;
            }
          }
        }
      }
    };
    const nextChange = () => {
      if (!props2.disabled) {
        if (currentPage.value < Math.ceil(props2.total / props2.pageSize)) {
          currentPage.value += 1;
          emit("update:current", currentPage.value);
          emit("change", currentPage.value);
          if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
            if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
              marginLeft.value -= props2.size == "small" ? 32 : 36;
            }
          }
        }
      }
    };
    const change = (index) => {
      if (!props2.disabled) {
        currentPage.value = index;
        emit("update:current", currentPage.value);
        emit("change", currentPage.value);
        if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
          if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
            marginLeft.value = (currentPage.value - props2.maxSize / 2) * -(props2.size == "small" ? 32 : 36);
          } else if (currentPage.value <= props2.maxSize / 2) {
            marginLeft.value = 0;
          } else if (props2.pageSize - currentPage.value < props2.maxSize / 2) {
            marginLeft.value = (Math.ceil(props2.total / props2.pageSize) - props2.maxSize) * -(props2.size == "small" ? 32 : 36);
          }
        }
      }
    };
    const topage = (e) => {
      if (!props2.disabled) {
        if (parseInt(e.target.value) <= Math.ceil(props2.total / props2.pageSize)) {
          currentPage.value = e.target.value;
          emit("update:current", currentPage.value);
          emit("change", currentPage.value);
          if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
            if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
              marginLeft.value = (currentPage.value - props2.maxSize / 2) * -(props2.size == "small" ? 32 : 36);
            } else if (currentPage.value <= props2.maxSize / 2) {
              marginLeft.value = 0;
            } else if (props2.pageSize - currentPage.value < props2.maxSize / 2) {
              marginLeft.value = (Math.ceil(props2.total / props2.pageSize) - props2.maxSize) * -(props2.size == "small" ? 32 : 36);
            }
          }
        } else {
          currentPage.value = Math.ceil(props2.total / props2.pageSize);
          emit("update:current", currentPage.value);
          emit("change", currentPage.value);
          if (Math.ceil(props2.total / props2.pageSize) > props2.maxSize) {
            if (currentPage.value > props2.maxSize / 2 && Math.ceil(props2.total / props2.pageSize) - currentPage.value >= props2.maxSize / 2) {
              marginLeft.value = (currentPage.value - props2.maxSize / 2) * -(props2.size == "small" ? 32 : 36);
            } else if (currentPage.value <= props2.maxSize / 2) {
              marginLeft.value = 0;
            } else if (props2.pageSize - currentPage.value < props2.maxSize / 2) {
              marginLeft.value = (Math.ceil(props2.total / props2.pageSize) - props2.maxSize) * -(props2.size == "small" ? 32 : 36);
            }
          }
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yuan-pagination-box", `yuan-pagination-${__props.size}`, { "yuan-pagination-disabled": __props.disabled }]),
        style: normalizeStyle({ "text-align": __props.align })
      }, [
        createElementVNode("div", _hoisted_1$d, [
          createElementVNode("div", _hoisted_2$9, [
            __props.showTotal ? (openBlock(), createElementBlock("span", _hoisted_3$5, "共 " + toDisplayString(__props.total) + " 条", 1)) : createCommentVNode("", true),
            __props.prevText != "" ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(["yuan-prev-text-text", { "yuan-prev-text-text-disabled": currentPage.value <= 1 }]),
              onClick: prevChange
            }, toDisplayString(__props.prevText), 3)) : createCommentVNode("", true),
            __props.prevText == "" || __props.prevText == void 0 ? (openBlock(), createElementBlock("span", {
              key: 2,
              class: normalizeClass(["yuan-prev-text yuan-text-box", { "yuan-prev-text-disabled": currentPage.value <= 1 }]),
              onClick: prevChange
            }, [..._cache[1] || (_cache[1] = [
              createElementVNode("i", { class: "m-icon-arrow-left-bold" }, null, -1)
            ])], 2)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: "yuan-block-box",
              style: normalizeStyle({ "width": __props.pageSize <= 10 && Math.ceil(__props.total / __props.pageSize) <= 10 ? "auto" : (__props.size == "small" ? 32 : 36) * __props.maxSize + "px" })
            }, [
              createElementVNode("div", {
                class: "yuan-block-margin-box",
                style: normalizeStyle({ "width": __props.pageSize <= 10 && Math.ceil(__props.total / __props.pageSize) <= 10 ? "auto" : (__props.size == "small" ? 32 : 36) * Math.ceil(__props.total / __props.pageSize) + "px", "margin-left": marginLeft.value + "px" })
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Math.ceil(__props.total / __props.pageSize), (item, index) => {
                  return openBlock(), createElementBlock("li", {
                    class: normalizeClass(["yuan-block-li", { "yuan-block-li-active": currentPage.value - 1 == index }]),
                    key: index,
                    onClick: ($event) => change(index + 1)
                  }, toDisplayString(index + 1), 11, _hoisted_4$4);
                }), 128))
              ], 4)
            ], 4),
            __props.nextText == "" || __props.nextText == void 0 ? (openBlock(), createElementBlock("span", {
              key: 3,
              class: normalizeClass(["yuan-next-text yuan-text-box", { "yuan-next-text-disabled": currentPage.value >= __props.total / __props.pageSize }]),
              onClick: nextChange
            }, [..._cache[2] || (_cache[2] = [
              createElementVNode("i", { class: "m-icon-arrow-right-bold" }, null, -1)
            ])], 2)) : createCommentVNode("", true),
            __props.nextText != "" ? (openBlock(), createElementBlock("span", {
              key: 4,
              class: normalizeClass(["yuan-next-text-text", { "yuan-next-text-text-disabled": currentPage.value >= __props.total / __props.pageSize }]),
              onClick: nextChange
            }, toDisplayString(__props.nextText), 3)) : createCommentVNode("", true),
            __props.jumper ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
              _cache[3] || (_cache[3] = createElementVNode("span", null, "跳至", -1)),
              createElementVNode("span", _hoisted_6$2, [
                createVNode(unref(mInput), {
                  size: __props.size == "small" ? "mini" : "small",
                  modelValue: currentPage.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentPage.value = $event),
                  onChange: topage,
                  disabled: __props.disabled
                }, null, 8, ["size", "modelValue", "disabled"])
              ]),
              _cache[4] || (_cache[4] = createElementVNode("span", null, "页", -1))
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 6);
    };
  }
});
const mPagination = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-ee6a538a"]]);
mPagination.install = (app) => {
  app.component(mPagination.name, mPagination);
};
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
const $yuan = {
  formatDate: (date, fmt) => {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
    return fmt;
  },
  formatTime: (strtime) => {
    return new Date(strtime.replace(/-/g, "/")).getTime();
  }
};
const index_vue_vue_type_style_index_0_scoped_91e77372_lang = "";
const _hoisted_1$c = {
  class: /* @__PURE__ */ normalizeClass(["yuan-date-box", "yuan-date-default"])
};
const _hoisted_2$8 = { class: "yuan-date-inner-box" };
const _hoisted_3$4 = { class: "yuan-date-fipx-box" };
const _hoisted_4$3 = { class: "yuan-date-date-box" };
const _hoisted_5$2 = { class: "yuan-date-btn-left" };
const _hoisted_6$1 = { key: 0 };
const _hoisted_7$1 = { key: 1 };
const _hoisted_8$1 = { key: 2 };
const _hoisted_9 = {
  key: 3,
  class: "yuan-i-rotate"
};
const _hoisted_10 = { class: "yuan-date-btn-center" };
const _hoisted_11 = { class: "yuan-date-btn-right" };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { key: 2 };
const _hoisted_15 = { key: 3 };
const _hoisted_16 = { class: "yuan-date-year-month-box" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["title"];
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["title"];
const _hoisted_21 = ["onClick"];
const _hoisted_22 = ["title"];
const _hoisted_23 = ["onClick"];
const _hoisted_24 = ["title"];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = ["title"];
const _hoisted_27 = ["onClick"];
const _hoisted_28 = ["title"];
const _hoisted_29 = {
  key: 0,
  class: "yuan-today-box"
};
const _hoisted_30 = ["onClick"];
const _hoisted_31 = ["onClick"];
const _sfc_main$g = /* @__PURE__ */ Object.assign({
  name: "mDate"
}, {
  __name: "index",
  props: {
    modelValue: String | Number,
    size: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    placeholder: String,
    format: {
      type: String,
      default: "yyyy/MM/dd"
    },
    clearable: Boolean,
    type: {
      type: String,
      default: "date"
    },
    showToday: {
      type: Boolean,
      default: true
    },
    startDate: {
      type: String,
      default: "1000/01/01"
    },
    endDate: {
      type: String,
      default: "9999/12/31"
    },
    customClass: String,
    customActiveColor: {
      type: String,
      default: "#0e80eb"
    },
    form: String
  },
  emits: ["update:modelValue", "clear", "open", "close", "change"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "v6ce2048c": color.value
    }));
    const emit = __emit;
    const props2 = __props;
    Date.prototype.format = function(fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      let o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds()
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + "";
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero2(str));
        }
      }
      return fmt;
    };
    const disStartDate = ref$2((/* @__PURE__ */ new Date(props2.startDate + " 00:00:00")).getTime());
    const disEndDate = ref$2((/* @__PURE__ */ new Date(props2.endDate + " 00:00:00")).getTime());
    const dateVal = ref$2(props2.modelValue);
    const show = ref$2(false);
    const daysList = ref$2([]);
    const placeholders = ref$2(props2.placeholder || "");
    const dateShow = ref$2(true);
    const yearList = ref$2([]);
    const monthList = ref$2([]);
    const monthShow = ref$2(false);
    const color = ref$2(props2.customActiveColor);
    function padLeftZero2(str) {
      return ("00" + str).substr(str.length);
    }
    const dateObj = function() {
      var _date = dateVal.value == "" ? /* @__PURE__ */ new Date() : new Date(dateVal.value);
      return {
        getDate: function() {
          return _date;
        },
        setDate: function(date) {
          _date = date;
        }
      };
    }();
    const getDays = (year, month, start) => {
      daysList.value = [];
      for (let i = start; i <= 42; i++) {
        daysList.value.push(
          {
            dates: new Date(year, month, i).format(props2.format),
            time: new Date(year, month, i).getTime(),
            year: new Date(year, month, i).getFullYear(),
            month: new Date(year, month, i).getMonth() + 1,
            day: new Date(year, month, i).getDate()
          }
        );
      }
    };
    const selDate = ref$2({
      date: dateObj.getDate().format(props2.format),
      year: dateObj.getDate().getFullYear(),
      month: dateObj.getDate().getMonth() + 1,
      day: dateObj.getDate().getDate()
    });
    const getWeek = (date) => {
      return new Date(date).getDay() == 0 ? 7 : new Date(date).getDay();
    };
    const setDate = () => {
      selDate.value.date = dateObj.getDate().format(props2.format);
      selDate.value.year = dateObj.getDate().getFullYear();
      selDate.value.month = dateObj.getDate().getMonth() + 1;
    };
    const prevMonth = () => {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(selDate.value.date));
    };
    const nextMonth = () => {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(selDate.value.date));
    };
    const prevYear = () => {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear() - 1, dateObj.getDate().getMonth(), 1));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(selDate.value.date));
    };
    const nextYear = () => {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear() + 1, dateObj.getDate().getMonth(), 1));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(selDate.value.date));
    };
    const focus = (e) => {
      show.value = true;
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), 1));
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(dateObj.getDate().toLocaleDateString()));
      emit("open");
    };
    const blur = (e) => {
      show.value = false;
      if (props2.type == "date") {
        dateShow.value = true;
        monthShow.value = false;
      }
      emit("close");
    };
    const clear = () => {
      dateVal.value = "";
      emit("update:modelValue", dateVal.value);
      emit("clear");
    };
    const vClickOutside = {
      beforeMount(el) {
        let handler = (e) => {
          if (!props2.disabled) {
            if (props2.type == "year") {
              if (el.contains(e.target) && e.target.className.indexOf("choosDateSpan") == -1 && e.target.className.indexOf("clearable-icon") == -1 && e.target.className.indexOf("yuan-chooseYear-span") == -1) {
                if (!show.value) {
                  focus();
                }
              } else {
                if (show.value) {
                  blur();
                }
              }
            } else if (props2.type == "month") {
              if (el.contains(e.target) && e.target.className.indexOf("choosDateSpan") == -1 && e.target.className.indexOf("clearable-icon") == -1 && e.target.className.indexOf("yuan-chooseMonth-span") == -1) {
                if (!show.value) {
                  focus();
                }
              } else {
                if (show.value) {
                  blur();
                }
              }
            } else {
              if (el.contains(e.target) && e.target.className.indexOf("choosDateSpan") == -1 && e.target.className.indexOf("clearable-icon") == -1 && e.target.className.indexOf("yuan-today-span") == -1) {
                if (!show.value) {
                  focus();
                }
              } else if (e.target.className.indexOf("date-span-disabled") == -1) {
                if (show.value) {
                  blur();
                }
              }
            }
          }
        };
        el.handler = handler;
        if (typeof document !== "undefined") {
          document.addEventListener("click", handler);
        }
      },
      unmounted(el) {
        if (typeof document !== "undefined") {
          document.removeEventListener("click", el.handler);
        }
      }
    };
    const selectDate = (item) => {
      if (item.time >= disStartDate.value && item.time <= disEndDate.value) {
        if (item.month > selDate.value.month) {
          nextMonth();
        } else if (item.month < selDate.value.month) {
          prevMonth();
        }
        dateVal.value = item.dates;
        selDate.value.date = dateVal.value;
        selDate.value.day = item.day;
        emit("update:modelValue", dateVal.value);
        emit("change", dateVal.value);
        blur();
      }
    };
    const getYearList = (startYear) => {
      let list = [];
      for (let i = 0; i < 10; i++) {
        list.push(new Date(selDate.value.year) - parseInt(new Date(selDate.value.year) % 10) + i);
      }
      return list;
    };
    const getPrevYear = () => {
      selDate.value.year = selDate.value.year - 10;
      yearList.value = getYearList(selDate.value.year);
    };
    const getNextYear = () => {
      selDate.value.year = selDate.value.year + 10;
      yearList.value = getYearList(selDate.value.year);
    };
    const chooseYear = () => {
      dateShow.value = false;
      yearList.value = getYearList(selDate.value.year);
    };
    const chooseMonth = () => {
      dateShow.value = false;
      monthShow.value = true;
    };
    const dateYearSel = (item) => {
      if (props2.type == "date") {
        monthShow.value = true;
        selDate.value.year = item;
        dateObj.setDate(new Date(selDate.value.year, selDate.value.month - 1, 1));
        setDate();
        getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(dateObj.getDate().toLocaleDateString()));
      } else if (props2.type == "year") {
        dateVal.value = item;
        selDate.value.year = item;
        monthShow.value = false;
        dateShow.value = false;
        emit("update:modelValue", dateVal.value);
        emit("change", dateVal.value);
        blur();
      } else {
        monthShow.value = true;
        dateShow.value = false;
        selDate.value.year = item;
      }
    };
    const dateMonthSel = (item) => {
      if (props2.type == "month") {
        dateVal.value = (/* @__PURE__ */ new Date(selDate.value.year + "-" + item.m1)).format("yyyy-MM");
        selDate.value.month = item.m1;
        emit("update:modelValue", dateVal.value);
        emit("change", dateVal.value);
        blur();
      } else {
        monthShow.value = false;
        dateShow.value = true;
        selDate.value.month = item.m1 - 1;
        dateObj.setDate(new Date(selDate.value.year, selDate.value.month, 1));
        setDate();
        getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(dateObj.getDate().toLocaleDateString()));
      }
    };
    const onlyYearPrev = () => {
      selDate.value.year = selDate.value.year - 1;
    };
    const onlyYearNext = () => {
      selDate.value.year = selDate.value.year + 1;
    };
    const showYaer = () => {
      dateShow.value = false;
      monthShow.value = false;
      yearList.value = getYearList(selDate.value.year);
    };
    const today = () => {
      var date = /* @__PURE__ */ new Date();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
      setDate();
      getDays(dateObj.getDate().getFullYear(), dateObj.getDate().getMonth(), 2 - getWeek(new Date(date.getFullYear(), date.getMonth(), 1)));
      dateVal.value = dateObj.getDate().format(props2.format);
      emit("update:modelValue", dateVal.value);
      emit("change", dateVal.value);
      blur();
    };
    onMounted(() => {
      monthList.value = [];
      for (let i = 0; i < 12; i++) {
        monthList.value.push({ m: i + 1 + "月", m1: i + 1 });
      }
      if (props2.type == "year") {
        dateShow.value = false;
        monthShow.value = false;
        yearList.value = getYearList(selDate.value.year);
      }
      if (props2.type == "month") {
        dateShow.value = false;
        monthShow.value = true;
      }
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$c, [
        createElementVNode("div", _hoisted_2$8, [
          createVNode(unref(mInput), {
            modelValue: dateVal.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dateVal.value = $event),
            leftIcon: "m-icon-calendar",
            onClear: clear,
            size: __props.size,
            clearable: __props.clearable,
            readonly: "",
            placeholder: placeholders.value,
            disabled: __props.disabled,
            focusColor: __props.customActiveColor,
            form: __props.form
          }, null, 8, ["modelValue", "size", "clearable", "placeholder", "disabled", "focusColor", "form"]),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              show.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["yuan-date-option", `yuan-date-option-${__props.size}`, __props.customClass])
              }, [
                createElementVNode("div", _hoisted_3$4, [
                  createElementVNode("div", _hoisted_4$3, [
                    createElementVNode("div", {
                      class: normalizeClass(["yuan-date-header", `yuan-date-header-${__props.size}`])
                    }, [
                      createElementVNode("div", _hoisted_5$2, [
                        monthShow.value ? (openBlock(), createElementBlock("span", _hoisted_6$1, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-left",
                            onClick: onlyYearPrev
                          })
                        ])) : createCommentVNode("", true),
                        !dateShow.value && !monthShow.value ? (openBlock(), createElementBlock("span", _hoisted_7$1, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-left",
                            onClick: getPrevYear
                          })
                        ])) : createCommentVNode("", true),
                        dateShow.value ? (openBlock(), createElementBlock("span", _hoisted_8$1, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-left",
                            onClick: prevYear
                          })
                        ])) : createCommentVNode("", true),
                        dateShow.value && __props.type == "date" ? (openBlock(), createElementBlock("span", _hoisted_9, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-right",
                            onClick: prevMonth
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      createElementVNode("div", _hoisted_10, [
                        withDirectives(createElementVNode("span", {
                          class: "chooseYear",
                          onClick: chooseYear
                        }, toDisplayString(selDate.value.year) + " 年 ", 513), [
                          [vShow, dateShow.value && __props.type == "date"]
                        ]),
                        withDirectives(createElementVNode("span", {
                          class: "chooseMonth",
                          onClick: chooseMonth
                        }, toDisplayString(selDate.value.month) + " 月", 513), [
                          [vShow, dateShow.value && __props.type == "date"]
                        ]),
                        withDirectives(createElementVNode("span", {
                          class: "chooseMonth",
                          onClick: showYaer
                        }, toDisplayString(selDate.value.year) + " 年 ", 513), [
                          [vShow, monthShow.value]
                        ]),
                        withDirectives(createElementVNode("span", null, toDisplayString(yearList.value[0] + " 年 - " + yearList.value[yearList.value.length - 1] + " 年"), 513), [
                          [vShow, !dateShow.value && !monthShow.value || __props.type == "year"]
                        ])
                      ]),
                      createElementVNode("div", _hoisted_11, [
                        dateShow.value && __props.type == "date" ? (openBlock(), createElementBlock("span", _hoisted_12, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-right",
                            onClick: nextMonth
                          })
                        ])) : createCommentVNode("", true),
                        dateShow.value ? (openBlock(), createElementBlock("span", _hoisted_13, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-right",
                            onClick: nextYear
                          })
                        ])) : createCommentVNode("", true),
                        !dateShow.value && !monthShow.value ? (openBlock(), createElementBlock("span", _hoisted_14, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-right",
                            onClick: getNextYear
                          })
                        ])) : createCommentVNode("", true),
                        monthShow.value ? (openBlock(), createElementBlock("span", _hoisted_15, [
                          createElementVNode("i", {
                            class: "m-icon-arrow-double-right",
                            onClick: onlyYearNext
                          })
                        ])) : createCommentVNode("", true)
                      ])
                    ], 2),
                    withDirectives(createElementVNode("div", {
                      class: normalizeClass(["yuan-date-content-box", `yuan-date-content-box-${__props.size}`])
                    }, [
                      createElementVNode("div", _hoisted_16, [
                        createElementVNode("table", null, [
                          createElementVNode("tbody", null, [
                            _cache[1] || (_cache[1] = createElementVNode("tr", null, [
                              createElementVNode("th", null, [
                                createElementVNode("span", null, "一")
                              ]),
                              createElementVNode("th", null, [
                                createElementVNode("span", null, "二")
                              ]),
                              createElementVNode("th", null, [
                                createElementVNode("span", null, "三")
                              ]),
                              createElementVNode("th", null, [
                                createElementVNode("span", null, "四")
                              ]),
                              createElementVNode("th", null, [
                                createElementVNode("span", null, "五")
                              ]),
                              createElementVNode("th", null, [
                                createElementVNode("span", null, "六")
                              ]),
                              createElementVNode("th", null, [
                                createElementVNode("span", null, "日")
                              ])
                            ], -1)),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index < 7 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_18)
                                  ], 10, _hoisted_17)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 7 && index < 14 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_20)
                                  ], 10, _hoisted_19)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 14 && index < 21 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_22)
                                  ], 10, _hoisted_21)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 21 && index < 28 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_24)
                                  ], 10, _hoisted_23)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 28 && index < 35 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_26)
                                  ], 10, _hoisted_25)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]),
                            createElementVNode("tr", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(daysList.value, (item, index) => {
                                return openBlock(), createElementBlock(Fragment, { key: index }, [
                                  index >= 35 && index < 42 ? (openBlock(), createElementBlock("td", {
                                    key: 0,
                                    onClick: ($event) => selectDate(item),
                                    class: normalizeClass({ "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value })
                                  }, [
                                    createElementVNode("span", {
                                      class: normalizeClass(["choosDateSpan", { active: selDate.value.date == item.dates }, item.month < selDate.value.month ? "prev-month" : item.month == selDate.value.month ? "" : "next-month", { "date-span-disabled": item.time < disStartDate.value || item.time > disEndDate.value }]),
                                      title: item.dates
                                    }, toDisplayString(item.day), 11, _hoisted_28)
                                  ], 10, _hoisted_27)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ])
                          ])
                        ])
                      ]),
                      __props.showToday && __props.type == "date" ? (openBlock(), createElementBlock("div", _hoisted_29, [
                        createElementVNode("span", {
                          onClick: today,
                          class: "yuan-today-span"
                        }, "今天")
                      ])) : createCommentVNode("", true)
                    ], 2), [
                      [vShow, dateShow.value && __props.type == "date"]
                    ]),
                    withDirectives(createElementVNode("div", {
                      class: normalizeClass(["yuan-choose-year-box", `yuan-choose-year-box-${__props.size}`])
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(yearList.value, (item, index) => {
                        return openBlock(), createElementBlock("div", { key: index }, [
                          createElementVNode("span", {
                            class: normalizeClass([{ "active": selDate.value.year == item }, "yuan-chooseYear-span"]),
                            onClick: ($event) => dateYearSel(item)
                          }, toDisplayString(item), 11, _hoisted_30)
                        ]);
                      }), 128))
                    ], 2), [
                      [vShow, !dateShow.value && !monthShow.value || __props.type == "year"]
                    ]),
                    withDirectives(createElementVNode("div", {
                      class: normalizeClass(["yuan-choose-month-box", `yuan-choose-month-box-${__props.size}`])
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(monthList.value, (item, index) => {
                        return openBlock(), createElementBlock("div", { key: index }, [
                          createElementVNode("span", {
                            class: normalizeClass([{ "active": selDate.value.month == item.m1 }, "yuan-chooseMonth-span"]),
                            onClick: ($event) => dateMonthSel(item)
                          }, toDisplayString(item.m), 11, _hoisted_31)
                        ]);
                      }), 128))
                    ], 2), [
                      [vShow, monthShow.value]
                    ])
                  ])
                ])
              ], 2)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ])), [
        [vClickOutside]
      ]);
    };
  }
});
const mDate = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-91e77372"]]);
mDate.install = (app) => {
  app.component(mDate.name, mDate);
};
const index_vue_vue_type_style_index_0_scoped_0c225bf2_lang = "";
const _hoisted_1$b = {
  key: 1,
  class: "yuan-backtop-default-box"
};
const _sfc_main$f = /* @__PURE__ */ Object.assign({
  name: "mBacktop"
}, {
  __name: "index",
  props: {
    target: {
      type: String,
      default: "body"
    },
    visibilityHeight: {
      type: Number,
      default: 240
    },
    right: {
      type: Number,
      default: 20
    },
    bottom: {
      type: Number,
      default: 40
    },
    customClass: String
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "v781c3626": bottom.value,
      "v8643d1cc": right.value
    }));
    const props2 = __props;
    const backtopShow = ref$2(false);
    const scrollTop = ref$2(0);
    const timer = ref$2(null);
    const slot = useSlots$1();
    const right = ref$2(props2.right + "px");
    const bottom = ref$2(props2.bottom + "px");
    const backtop = () => {
      clearInterval(timer.value);
      timer.value = setInterval(() => {
        scrollTop.value -= 30;
        if (props2.target == "body") {
          if (typeof document !== "undefined") {
            document.body.scrollTop = scrollTop.value = document.documentElement.scrollTop = scrollTop.value;
          }
        } else {
          if (typeof document !== "undefined") {
            document.querySelector(props2.target).scrollTop = scrollTop.value;
          }
        }
        if (scrollTop.value <= 0) {
          scrollTop.value = 0;
          clearInterval(timer.value);
        }
      });
    };
    const handleScroll = () => {
      if (typeof document !== "undefined") {
        scrollTop.value = props2.target == "body" ? document.body.scrollTop || document.documentElement.scrollTop : document.querySelector(props2.target).scrollTop;
      }
      if (scrollTop.value >= props2.visibilityHeight) {
        backtopShow.value = true;
      } else {
        backtopShow.value = false;
      }
    };
    onMounted(() => {
      if (props2.target == "body") {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", handleScroll, false);
        }
      } else {
        if (typeof document !== "undefined") {
          document.querySelector(props2.target).addEventListener("scroll", handleScroll, false);
        }
      }
    });
    onBeforeUnmount(() => {
      if (props2.target == "body") {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", handleScroll);
        }
      } else {
        if (typeof document !== "undefined") {
          document.querySelector(props2.target).removeEventListener("scroll", handleScroll);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          backtopShow.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["yuan-backtop-box", __props.customClass]),
            onClick: backtop
          }, [
            unref(slot)["default"] ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_1$b, [..._cache[0] || (_cache[0] = [
              createElementVNode("span", { class: "default-backtop-icon" }, [
                createElementVNode("i", { class: "m-icon-arrow-up-filling" })
              ], -1)
            ])]))
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const mBacktop = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-0c225bf2"]]);
mBacktop.install = (app) => {
  app.component(mBacktop.name, mBacktop);
};
const index_vue_vue_type_style_index_0_scoped_16b19018_lang = "";
const _hoisted_1$a = { class: "yuan-default-collapse-item-box" };
const _hoisted_2$7 = { class: "yuan-collapse-slot-box" };
const _hoisted_3$3 = { class: "yuan-slot-item-box" };
const __default__$1 = {
  name: "mCollapseItem"
};
const _sfc_main$e = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    name: String
  },
  setup(__props) {
    getCurrentInstance();
    useSlots$1();
    const boxshow = ref$2(false);
    const togger = (e) => {
      boxshow.value = !boxshow.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createElementVNode("div", {
          class: "yuan-collapse-item-title",
          onClick: _cache[0] || (_cache[0] = ($event) => togger())
        }, [
          _cache[1] || (_cache[1] = createElementVNode("span", null, "标题", -1)),
          createElementVNode("i", {
            class: normalizeClass(["m-icon-arrow-right", { rotate: boxshow.value }])
          }, null, 2)
        ]),
        createVNode(Transition, { name: "slide-fade" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", _hoisted_2$7, [
              createElementVNode("div", _hoisted_3$3, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ], 512), [
              [vShow, boxshow.value]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
const mCollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-16b19018"]]);
const index_vue_vue_type_style_index_0_scoped_1fcf5d63_lang = "";
const _sfc_main$d = /* @__PURE__ */ Object.assign({
  name: "mCollapse"
}, {
  __name: "index",
  setup(__props) {
    const collapseRef = ref$2(null);
    getCurrentInstance();
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "yuan-defalu-collapse-box",
        ref_key: "collapseRef",
        ref: collapseRef
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 512);
    };
  }
});
const mCollapse = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-1fcf5d63"]]);
mCollapse.install = (app) => {
  app.component(mCollapse.name, mCollapse);
};
mCollapseItem.install = (app) => {
  app.component(mCollapseItem.name, mCollapseItem);
};
const menuItem_vue_vue_type_style_index_0_scoped_62fce5cb_lang = "";
const _hoisted_1$9 = ["data-key"];
const _hoisted_2$6 = { class: "yuan-menu-item-title-box" };
const _sfc_main$c = {
  __name: "menuItem",
  props: {
    items: {
      type: Object,
      default: () => {
      }
    },
    index: Number,
    option: {
      type: Array,
      default: () => []
    },
    dataKey: String | Number,
    theme: {
      type: [Object, String]
    },
    type: String
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "v1840c65e": float.value,
      "v2201d406": themes.value.color,
      "v068bee5c": themes.value.activeBgColor,
      "v327a8390": themes.value.bgColor
    }));
    const emit = __emit;
    const props2 = __props;
    const float = ref$2(props2.type == "horizontal" ? "initial" : "left");
    const themes = ref$2({
      bgColor: typeof props2.theme == "string" ? props2.theme == "black" ? "#20252a" : "#fff" : props2.theme.bgColor,
      activeBgColor: typeof props2.theme == "string" ? props2.theme == "black" ? "#000" : "#eaeaea" : props2.theme.activeBgColor,
      color: typeof props2.theme == "string" ? props2.theme == "black" ? "#fff" : "#333" : props2.theme.color,
      activeColor: props2.theme.activeColor
    });
    const meunIconRotate = ref$2(false);
    const tabkey = ref$2("");
    const mentItemStyle = computed$1(() => {
      return {
        left: props2.index === 0 ? "0" : "242px",
        top: props2.index == 0 ? "61px" : "0px"
      };
    });
    const itemLiStyle = computed$1(() => {
      return {
        height: props2.index == 0 ? "58px" : "40px",
        "line-height": props2.index == 0 ? "58px" : "40px",
        padding: props2.index == 0 ? "0 20px" : !props2.items.icon ? "0 10px 0 5px" : "0 10px 0 10px"
      };
    });
    const iconClass = computed$1(() => {
      return {
        "m-icon-arrow-down-bold": props2.index == 0,
        "m-icon-arrow-right": props2.index != 0,
        menuIconRotate: props2.index == 0 && meunIconRotate.value,
        menuItemIconRotate: props2.index != 0 && meunIconRotate.value
      };
    });
    const activeColots = computed$1(() => {
      return {
        color: props2.items.isActive ? themes.value.activeColor : ""
      };
    });
    const spanClass = computed$1(() => {
      return {
        menitemDisabled: props2.items.disabled
      };
    });
    const IconRotate = (flag) => {
      meunIconRotate.value = flag;
    };
    props2.items.key = props2.dataKey;
    const getParents = (option, key) => {
      for (var i in option) {
        if (option[i].key == key) {
          return [option[i]];
        }
        if (option[i].children) {
          var ro = getParents(option[i].children, key);
          if (ro !== void 0) {
            return ro.concat(option[i]);
          }
        }
      }
    };
    let timer = null;
    let timer1 = null;
    const toggler = (item) => {
      if (props2.type == "vertical") {
        if (item.children && item.children.length) {
          clearTimeout(timer);
          clearTimeout(timer1);
          timer = setTimeout(() => {
            item.isOpen = true;
          }, 50);
          IconRotate(true);
        }
      }
    };
    const hide = (item) => {
      if (props2.type == "vertical") {
        clearTimeout(timer);
        clearTimeout(timer1);
        timer1 = setTimeout(() => {
          item.isOpen = false;
        }, 50);
        if (item.children && item.children.length) {
          IconRotate(false);
        }
      }
    };
    const setActive = (options) => {
      options.forEach((v, i) => {
        v.isActive = false;
        if (v.children && v.children.length) {
          setActive(v.children);
        }
      });
    };
    const handelClick = (item) => {
      if (!item.disabled) {
        tabkey.value = item.key;
        setActive(props2.option);
        getParents(props2.option, item.key).forEach((v, i) => {
          v.isActive = true;
        });
        getParents(props2.option, item.key)[getParents(props2.option, item.key).length - 1].isOpen = false;
        emit("change", item);
      }
    };
    return (_ctx, _cache) => {
      const _component_menu_item = resolveComponent("menu-item", true);
      return openBlock(), createElementBlock("div", {
        class: "yuan-menu-div-box",
        style: normalizeStyle({ width: __props.index != 0 ? "100%" : "" })
      }, [
        createElementVNode("li", {
          onMouseover: _cache[1] || (_cache[1] = ($event) => toggler(__props.items)),
          onMouseleave: _cache[2] || (_cache[2] = ($event) => hide(__props.items)),
          "data-key": __props.dataKey,
          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => handelClick(__props.items), ["stop"])),
          style: normalizeStyle(itemLiStyle.value),
          class: normalizeClass({
            activeMenuItem: __props.items.isActive,
            menitemDisabled: __props.items.disabled
          })
        }, [
          createElementVNode("div", _hoisted_2$6, [
            createElementVNode("span", {
              class: normalizeClass(["menu-icon", spanClass.value]),
              style: normalizeStyle(activeColots.value)
            }, [
              __props.items.icon ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(__props.items.icon)
              }, null, 2)) : createCommentVNode("", true)
            ], 6),
            createElementVNode("span", {
              class: normalizeClass(["menu-title", spanClass.value]),
              style: normalizeStyle(activeColots.value)
            }, toDisplayString(__props.items.title), 7),
            __props.items.children && __props.items.children.length ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(["menu-icon-arrow", spanClass.value]),
              style: normalizeStyle(activeColots.value)
            }, [
              createElementVNode("i", {
                class: normalizeClass(iconClass.value)
              }, null, 2)
            ], 6)) : createCommentVNode("", true)
          ]),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              __props.items.children && __props.items.children.length ? withDirectives((openBlock(), createElementBlock("div", {
                key: 0,
                class: "yuan-menu-item-position-box",
                style: normalizeStyle(mentItemStyle.value)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items.children, (item, i) => {
                  return openBlock(), createBlock(_component_menu_item, {
                    key: i,
                    items: item,
                    index: __props.index + (i + 1),
                    option: __props.option,
                    "data-key": __props.dataKey + "-" + i,
                    onChange: _cache[0] || (_cache[0] = ($event) => emit("change", $event)),
                    theme: __props.theme,
                    type: __props.type
                  }, null, 8, ["items", "index", "option", "data-key", "theme", "type"]);
                }), 128))
              ], 4)), [
                [vShow, __props.items.isOpen]
              ]) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 46, _hoisted_1$9)
      ], 4);
    };
  }
};
const menuItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-62fce5cb"]]);
const index_vue_vue_type_style_index_0_scoped_e2049cfc_lang = "";
const _hoisted_1$8 = { class: "yuan-menu-default-box" };
const _hoisted_2$5 = {
  key: 0,
  class: "rightCoustom"
};
const _sfc_main$b = /* @__PURE__ */ Object.assign({
  name: "mMenu"
}, {
  __name: "index",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    theme: {
      type: [Object, String],
      default: "white"
      //white,black
    },
    type: {
      type: String,
      default: "vertical"
      //vertical,horizontal
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "ed55fe56": height.value,
      "v3abf985f": themes.value.backgroundColor,
      "v5b6f7d21": themes.value.borderColor
    }));
    const emit = __emit;
    const props2 = __props;
    const height = ref$2(props2.type == "horizontal" ? "auto" : "60px");
    props2.options.forEach((item, index) => {
      item.key = index.toString();
    });
    const themes = ref$2({
      backgroundColor: typeof props2.theme == "string" ? props2.theme == "black" ? "#20252a" : "#fff" : props2.theme.bgColor,
      borderColor: typeof props2.theme == "string" ? props2.theme == "black" ? "#20252a" : "#f5f5f5" : props2.theme.borderColor
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index) => {
          return openBlock(), createBlock(menuItem, {
            key: index,
            items: item,
            index: 0,
            option: __props.options,
            "data-key": index,
            onChange: _cache[0] || (_cache[0] = ($event) => emit("change", $event)),
            theme: __props.theme,
            type: __props.type
          }, null, 8, ["items", "option", "data-key", "theme", "type"]);
        }), 128)),
        __props.type == "vertical" ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const mMenu = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-e2049cfc"]]);
mMenu.install = (app) => {
  app.component(mMenu.name, mMenu);
};
const nav_vue_vue_type_style_index_0_scoped_4e333b77_lang = "";
const _sfc_main$a = /* @__PURE__ */ Object.assign({
  name: "mTabsNav"
}, {
  __name: "nav",
  props: {
    panes: {
      type: Array,
      default: []
    },
    currentName: {
      type: String
    },
    active_color: {
      type: String
    },
    color: {
      type: String
    },
    addable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "line"
    }
  },
  emits: ["onTabClick"],
  setup(__props, { emit: __emit }) {
    const props2 = __props;
    const tabsContext = inject("tabsContext");
    const typeClass = computed$1(() => {
      return props2.type === "card" ? "tabs_header_card" : "tabs_header_line";
    });
    const active_bar_style = computed$1(() => {
      return {
        width: `${active_bar_info.offsetWidth}px`,
        transform: `translate3d(${active_bar_info.offsetLeft}px,0px,0px)`,
        "background-color": props2.active_color
      };
    });
    const emits = __emit;
    const scrollable = ref$2(false);
    const navWrap = ref$2(null);
    const navScroll = ref$2(null);
    const active_bar_info = reactive$2({
      width: 0,
      offsetLeft: 0
    });
    const navWrap_offset = ref$2(0);
    function getLabelNode(pane) {
      const close_btn = h("i", {
        class: { "m-icon-close": true, close_btn: true },
        style: { display: props2.type === "line" || props2.type === "" || pane.active ? "inline-block" : "" },
        onClick: (event) => {
          tabsContext.emits("onTabRemove", pane.props.name || pane.index);
          event.stopPropagation();
        }
      });
      const icon = h("i", { class: [`${pane.props.icon}`, "tab-icon"] });
      const label = defineComponent({
        render() {
          var _a, _b;
          return h(
            "div",
            {
              class: {
                nav_item: true,
                active: pane.active,
                disabled: pane.props.disabled,
                "is-closable": pane.active || pane.props.disabled ? "" : pane.props.closable || tabsContext.props.closable ? true : false
              },
              style: { color: pane.active ? props2.active_color : props2.color },
              onClick: pane.props.disabled ? null : ($event) => onTabClick(pane)
            },
            [
              pane.props.icon ? icon : "",
              ((_b = (_a = pane.slots).label) == null ? void 0 : _b.call(_a)) || pane.props.label,
              pane.props.disabled ? "" : pane.props.closable || tabsContext.props.closable ? close_btn : ""
            ]
          );
        }
      });
      return label;
    }
    function getNavInfo() {
      return {
        displayOffsetRight: navWrap_offset.value + navScroll.value.offsetWidth,
        displayOffsetLeft: navWrap_offset.value,
        navScrollWidth: navScroll.value.offsetWidth,
        navWrapWidth: navWrap.value.offsetWidth,
        navItem: navWrap.value.querySelectorAll(".nav_item")
      };
    }
    function scrollPrev() {
      if (navWrap_offset.value == 0)
        return;
      const {
        displayOffsetRight,
        displayOffsetLeft,
        navItem,
        navScrollWidth,
        navWrapWidth
      } = getNavInfo();
      const offsetLeft = Array.from(navItem).reduce((pre, cur) => {
        return pre ? pre : cur.offsetLeft >= displayOffsetLeft ? cur.offsetLeft : 0;
      }, 0);
      if (offsetLeft < navScrollWidth) {
        navWrap_offset.value = 0;
      } else {
        navWrap_offset.value = offsetLeft - navScrollWidth;
      }
    }
    function scrollNext() {
      const { displayOffsetRight, navItem, navScrollWidth, navWrapWidth } = getNavInfo();
      if (displayOffsetRight >= navWrapWidth) {
        return;
      }
      const offsetLeft = Array.from(navItem).reduce((pre, cur) => {
        return cur.offsetLeft > displayOffsetRight ? pre : cur.offsetLeft;
      }, 0);
      navWrap_offset.value = navWrapWidth - offsetLeft <= navScrollWidth ? navWrapWidth - navScrollWidth : offsetLeft;
    }
    function navScrollReSize() {
      navWrap.value.offsetWidth > navScroll.value.offsetWidth ? scrollable.value = true : scrollable.value = false;
      if (!scrollable.value || !navWrap_offset.value)
        return;
      const { displayOffsetRight, navScrollWidth, navWrapWidth } = getNavInfo();
      if (navScrollWidth >= navWrapWidth) {
        navWrap_offset.value = 0;
      } else if (displayOffsetRight >= navWrapWidth - navWrap_offset.value) {
        const newOffset = navWrapWidth - navScrollWidth;
        if (navWrap_offset.value > newOffset)
          navWrap_offset.value = newOffset;
      }
    }
    function update() {
      if (!navWrap.value || !navScroll)
        return;
      navScrollReSize();
      upDateBar();
    }
    watch(
      () => props2.currentName,
      () => {
        scrollToActiveTab();
      }
    );
    async function scrollToActiveTab() {
      await nextTick();
      const { displayOffsetRight, displayOffsetLeft, navScrollWidth } = getNavInfo();
      const mLabels = navWrap.value.querySelector(".active");
      if (displayOffsetLeft > mLabels.offsetLeft) {
        navWrap_offset.value = mLabels.offsetLeft;
      } else if (displayOffsetRight < mLabels.offsetLeft + mLabels.offsetWidth) {
        navWrap_offset.value = mLabels.offsetLeft + mLabels.offsetWidth - navScrollWidth;
      }
    }
    function upDateBar() {
      const mLabels = navWrap.value.querySelector(".active");
      if (!mLabels)
        return;
      let offsetLeft = mLabels.offsetLeft;
      active_bar_info.offsetWidth = mLabels.offsetWidth;
      active_bar_info.offsetLeft = offsetLeft - navWrap_offset.value;
    }
    function onTabClick(pane) {
      const tabName = pane.props.name || pane.index;
      emits("onTabClick", pane, tabName);
    }
    const vResize = {
      mounted(el, binding) {
        function reSize(fn) {
          let t = null;
          return (params) => {
            if (t) {
              clearTimeout(t);
            }
            t = setTimeout(() => {
              fn(el);
            }, 10);
          };
        }
        el._resizer = new window.ResizeObserver(reSize(binding.value));
        el._resizer.observe(el);
      },
      unmounted(el) {
        el._resizer.disconnect();
      }
    };
    onUpdated(() => {
      update();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tabs_header", typeClass.value])
      }, [
        scrollable.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "tab-nav-prev",
          onClick: scrollPrev
        }, [..._cache[1] || (_cache[1] = [
          createElementVNode("i", { class: "m-icon-arrow-left-bold" }, null, -1)
        ])])) : createCommentVNode("", true),
        props2.addable ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "tab_add_btn",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(tabsContext).emits("onTabAdd"))
        }, [..._cache[2] || (_cache[2] = [
          createElementVNode("i", { class: "m-icon-add-bold add_icon" }, null, -1)
        ])])) : createCommentVNode("", true),
        scrollable.value ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "tab-nav-next",
          onClick: scrollNext
        }, [..._cache[3] || (_cache[3] = [
          createElementVNode("i", { class: "m-icon-arrow-right-bold" }, null, -1)
        ])])) : createCommentVNode("", true),
        withDirectives((openBlock(), createElementBlock("div", {
          class: "tabs_nav_scroll",
          ref_key: "navScroll",
          ref: navScroll,
          style: normalizeStyle({ "margin-right": scrollable.value ? "30px" : "" })
        }, [
          createElementVNode("div", {
            class: "tabs_nav",
            ref_key: "navWrap",
            ref: navWrap,
            style: normalizeStyle({ transform: `translate3d(${-navWrap_offset.value}px,0px,0px)` })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props2.panes, (pane) => {
              return withDirectives((openBlock(), createBlock(resolveDynamicComponent(getLabelNode(pane)), {
                key: pane.uid
              })), [
                [vResize, upDateBar]
              ]);
            }), 128))
          ], 4),
          props2.type != "card" ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "active-bar",
            style: normalizeStyle(active_bar_style.value)
          }, null, 4)) : createCommentVNode("", true)
        ], 4)), [
          [vResize, navScrollReSize]
        ])
      ], 2);
    };
  }
});
const mTabsNav = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-4e333b77"]]);
const index_vue_vue_type_style_index_0_scoped_91da2ffd_lang = "";
const _hoisted_1$7 = { class: "tabs" };
const _hoisted_2$4 = { class: "tabs-content" };
const _sfc_main$9 = /* @__PURE__ */ Object.assign({
  name: "mTabs"
}, {
  __name: "index",
  props: {
    // 当前选择的tab
    modelValue: {
      type: [String, Number],
      default: ""
    },
    activeName: {
      type: [String, Number],
      default: ""
    },
    //样式  card或者line
    type: {
      type: String,
      default: "line"
    },
    //选中时字体和指示器的颜色
    active_color: {
      type: String,
      default: ""
    },
    addable: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    //未选中字体颜色
    color: {
      type: String,
      default: ""
    },
    beforeLeave: {
      type: Function,
      default: () => true
    }
  },
  emits: ["update:modelValue", "update:activeName", "onTabclick", "onChangeTab", "onTabAdd", "onTabRemove"],
  setup(__props, { emit: __emit }) {
    const props2 = __props;
    const emits = __emit;
    const instance = getCurrentInstance();
    const panes = ref$2([]);
    const paneStatesMap = {};
    const currentName = ref$2(props2.modelValue || props2.activeName || "0");
    provide("tabsContext", {
      emits,
      currentName,
      props: props2,
      updatePaneState: (pane) => paneStatesMap[pane.uid] = pane
    });
    function getTabPanes(content, paneInstanceList = []) {
      const children = content.children || [];
      children.forEach((node) => {
        let type = node.type.name || node.type;
        if (type === "mTabPane" && node.component) {
          paneInstanceList.push(node.component);
        } else if (type === Fragment || type === "template") {
          getTabPanes(node, paneInstanceList);
        }
      });
      return paneInstanceList.map((paneComponent, index) => {
        const pane = paneStatesMap[paneComponent.uid];
        pane.index = `${index}`;
        return pane;
      });
    }
    function checkPanesChanged(paneInstanceList) {
      return !// 如果长度一致
      (paneInstanceList.length === panes.value.length && // 如果所有元素一致
      paneInstanceList.every(
        (pane, index) => pane.uid === panes.value[index].uid
      ));
    }
    function updatePaneInstances() {
      if (!useSlots$1().default) {
        panes.value = [];
        return;
      }
      const content = instance.subTree.children.find(
        ({ props: props3 }) => (props3 == null ? void 0 : props3.class) === "tabs-content"
      );
      if (!content)
        return;
      const paneInstanceList = getTabPanes(content);
      if (!checkPanesChanged(paneInstanceList))
        return;
      if (currentName.value === "0")
        setCurrentName(paneInstanceList[0].props.name || "0");
      panes.value = paneInstanceList;
    }
    onMounted(() => {
      updatePaneInstances();
    });
    onUpdated(() => {
      updatePaneInstances();
    });
    function changeCurrentName(tabName) {
      currentName.value = tabName;
      emits("update:modelValue", tabName);
      emits("update:activeName", tabName);
      emits("onChangeTab", tabName);
    }
    function setCurrentName(tabName) {
      var _a;
      if (currentName.value === tabName)
        return;
      const canLeave = (_a = props2.beforeLeave) == null ? void 0 : _a.call(props2, currentName.value, tabName);
      if (!!canLeave && (typeof canLeave === "object" || typeof canLeave === "function") && typeof canLeave.then === "function") {
        canLeave.then(() => {
          changeCurrentName(tabName);
        }, () => {
        });
      } else if (canLeave !== false) {
        changeCurrentName(tabName);
      }
    }
    watch(() => props2.activeName, (modelValue) => {
      setCurrentName(modelValue);
    });
    watch(() => props2.modelValue, (modelValue) => {
      setCurrentName(modelValue);
    });
    function handleTabClick(pane, tabName) {
      setCurrentName(tabName);
      emits("onTabclick", tabName);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(mTabsNav, {
          panes: panes.value,
          currentName: currentName.value,
          active_color: props2.active_color,
          type: props2.type,
          color: props2.color,
          addable: props2.addable,
          onOnTabClick: handleTabClick
        }, null, 8, ["panes", "currentName", "active_color", "type", "color", "addable"]),
        createElementVNode("div", _hoisted_2$4, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
const mTabs = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-91da2ffd"]]);
const pane_vue_vue_type_style_index_0_scoped_f0c7d3f3_lang = "";
const _hoisted_1$6 = {
  key: 0,
  class: "tab_pane"
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign({
  name: "mTabPane"
}, {
  __name: "pane",
  props: {
    name: {
      type: String,
      default: ""
    },
    label: {
      type: [String, Object],
      default: ""
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props2 = __props;
    const instance = getCurrentInstance();
    const index = ref$2("");
    const loaded = ref$2(false);
    const tabsContext = inject("tabsContext");
    const active = computed$1(
      () => tabsContext.currentName.value === (props2.name || index.value)
    );
    const shouldRender = computed$1(
      () => !props2.lazy || loaded.value || active.value
    );
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    tabsContext.updatePaneState(
      reactive$2({
        uid: instance.uid,
        instance: markRaw(instance),
        slots: instance.slots,
        props: props2,
        index,
        active
      })
    );
    return (_ctx, _cache) => {
      return shouldRender.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$6, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 512)), [
        [vShow, active.value]
      ]) : createCommentVNode("", true);
    };
  }
});
const mTabPane = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-f0c7d3f3"]]);
mTabs.install = (app) => {
  app.component(mTabs.name, mTabs);
  app.component(mTabPane.name, mTabPane);
};
const _hoisted_1$5 = {
  class: "m-space",
  ref: "spaceRef"
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign({
  name: "mSpace"
}, {
  __name: "index",
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    size: {
      type: Object,
      default: () => [10, 10]
    },
    alignItems: {
      type: String,
      default: "center"
    }
  },
  setup(__props) {
    const props2 = __props;
    const $slot = useSlots$1();
    const slotList = ref$2([]);
    const align = computed$1(() => props2.inline ? props2.alignItems : "left");
    computed$1(() => {
      return {
        display: props2.inline ? "inline-flex" : "flex",
        gap: props2.size.length == 2 ? `${props2.size[0]}px ${props2.size[1]}px` : `${props2.size[0]}px`,
        "flex-direction": props2.inline ? "inherit" : "column",
        "align-items": align.value,
        "flex-wrap": "wrap",
        margin: `${props2.size[0] / 2}px 0px`,
        width: props2.inline ? "100%" : "fit-content"
      };
    });
    $slot.default().forEach((item, index, arr) => {
      slotList.value.push(
        h(
          "div",
          {
            className: "m-space-item",
            style: "width:fit-content"
          },
          item
        )
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, null, 512);
    };
  }
});
_sfc_main$7.install = (app) => {
  app.component(_sfc_main$7.name, _sfc_main$7);
};
const index_vue_vue_type_style_index_0_scoped_38864893_lang = "";
const _hoisted_1$4 = ["aria-hidden"];
const _hoisted_2$3 = ["textContent"];
const _sfc_main$6 = /* @__PURE__ */ Object.assign({
  name: "mPopover"
}, {
  __name: "index",
  props: {
    width: {
      type: [String, Number]
    },
    placement: {
      //popover展示出的位置,可选值——top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
      type: [String],
      default: "top"
    },
    modelValue: {
      type: Boolean,
      default: true
    },
    content: {
      type: [String]
    },
    popperClass: {
      //自定义类，给弹出框添加自定义样式
      type: [String]
    },
    title: {
      type: [String]
    },
    transition: {
      //popover过渡动画设置
      type: String,
      default: "slide-fade"
    },
    disabled: {
      type: [Boolean],
      default: false
    },
    //trigger可选值——click,hover,manual,focus
    trigger: {
      type: [String],
      default: "click"
    }
  },
  emits: ["after-enter", "after-leave"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props2 = __props;
    const visible = ref$2(false);
    const showPopover = computed$1(() => {
      if (props2.trigger !== "manual") {
        return visible.value;
      } else {
        console.log(props2.modelValue);
        return props2.modelValue;
      }
    });
    const popoverStyles = computed$1(() => {
      let style = {};
      if (props2.width ?? null) {
        style.width = props2.width + "px";
      }
      return style;
    });
    const reference = ref$2(null);
    const popoverArrow = ref$2(null);
    onMounted(() => {
      console.log(reference.value.clientWidth);
      if (props2.placement.includes("top") || props2.placement.includes("bottom")) {
        let clientWidth = reference.value.clientWidth;
        popoverArrow.value.style.setProperty(
          "--geticonsite",
          clientWidth / 2 + "px"
        );
      } else if (props2.placement.includes("left") || props2.placement.includes("right")) {
        let clientHeight = reference.value.clientHeight;
        popoverArrow.value.style.setProperty(
          "--geticonsite",
          clientHeight / 2 + "px"
        );
      }
    });
    const timer = ref$2(null);
    function clickTriggerHandler() {
      if (props2.trigger.toLowerCase() == "click") {
        if (!props2.disabled) {
          visible.value = !visible.value;
        }
      }
    }
    function focusTriggerHandler() {
      if (props2.trigger.toLowerCase() == "focus") {
        if (!props2.disabled) {
          visible.value = true;
        }
      }
    }
    function blurTriggerHandler() {
      if (props2.trigger.toLowerCase() == "focus") {
        if (!props2.disabled) {
          visible.value = false;
        }
      }
    }
    function hoverTriggerEnterHandler() {
      if (props2.trigger.toLowerCase() == "hover") {
        if (!props2.disabled) {
          clearTimeout(timer.value);
          visible.value = true;
        }
      }
    }
    function hoverTriggerLeaveHandler() {
      if (props2.trigger.toLowerCase() == "hover") {
        if (!props2.disabled) {
          timer.value = setTimeout(() => {
            visible.value = false;
          }, 300);
        }
      }
    }
    function handleAfterEnter() {
      emit("after-enter");
    }
    function handleAfterLeave() {
      emit("after-leave");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "popover-box",
        onMouseenter: hoverTriggerEnterHandler,
        onMouseleave: hoverTriggerLeaveHandler
      }, [
        createVNode(Transition, {
          name: __props.transition,
          onAfterEnter: handleAfterEnter,
          onAfterLeave: handleAfterLeave
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass(["popover-outbox", __props.placement, __props.popperClass]),
              "aria-hidden": __props.disabled || !showPopover.value ? "true" : "false"
            }, [
              createElementVNode("div", {
                class: "popover-arrow",
                ref_key: "popoverArrow",
                ref: popoverArrow
              }, null, 512),
              createElementVNode("div", {
                class: normalizeClass(["popover-box-content"]),
                style: normalizeStyle(popoverStyles.value)
              }, [
                __props.title ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  textContent: toDisplayString(__props.title),
                  class: "popover-title"
                }, null, 8, _hoisted_2$3)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.content), 1)
                ], true)
              ], 4)
            ], 10, _hoisted_1$4), [
              [vShow, !__props.disabled && showPopover.value]
            ])
          ]),
          _: 3
        }, 8, ["name"]),
        createElementVNode("div", {
          ref_key: "reference",
          ref: reference,
          class: "reference-content",
          onClick: clickTriggerHandler,
          onMousedown: focusTriggerHandler,
          onMouseup: blurTriggerHandler
        }, [
          renderSlot(_ctx.$slots, "reference", {}, void 0, true)
        ], 544)
      ], 32);
    };
  }
});
const mPopover = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-38864893"]]);
mPopover.install = (app) => {
  app.component(mPopover.name, mPopover);
};
const index_vue_vue_type_style_index_0_scoped_46d8d367_lang = "";
const _hoisted_1$3 = { class: "yuan-progress" };
const _hoisted_2$2 = {
  key: 0,
  class: "yuan-progress-default"
};
const _hoisted_3$2 = { class: "yuan-progress-status" };
const _hoisted_4$2 = ["stroke-dasharray", "stroke-dashoffset"];
const _hoisted_5$1 = ["stroke", "stroke-dasharray", "stroke-dashoffset"];
const __default__ = {
  name: "mProgress"
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    // 百分比
    percent: {
      type: Number,
      default: 0
    },
    // circle-&-line
    progressType: {
      type: String,
      default: "line"
    },
    // line-progress-height
    progressHeight: {
      type: Number,
      default: 16
    },
    // circle-width-height
    circleSize: {
      type: Number,
      default: 200
    },
    // circle-height
    circleHeight: {
      type: Number,
      default: 8
    },
    // is display progress text
    isShowText: {
      type: Boolean,
      default: false
    },
    // SUCCESS
    // FAIL
    // OTHER
    currentStatus: {
      type: String,
      default: ""
    },
    // progress background-color
    bgColor: {
      type: [String, Function],
      default: ""
      // #09b63d
    },
    // progress animation durition
    progressSpeed: {
      type: Number,
      default: 3
    },
    // is display animation progress
    isAnimation: {
      type: Boolean,
      default: false
    },
    // is display progress borderRadius
    roundCorner: Boolean,
    // set define text percent
    setPercentText: {
      type: Function,
      default: (percent) => `${percent >= 100 ? 100 : percent}%`
    }
  },
  setup(__props) {
    const props2 = __props;
    const progressCircleText = computed$1(() => {
      return props2.percent >= 100 ? "100%" : props2.percent + "%";
    });
    const backClass = computed$1(() => {
      return ["yuan-progress-back", props2.roundCorner ? "yuan-progress-b-r" : ""];
    });
    const speedClass = computed$1(() => {
      return props2.progressType === "line" ? [
        "yuan-progress-speed",
        props2.isAnimation ? "yuan-progress-animation" : "",
        props2.roundCorner ? "yuan-progress-b-r" : ""
      ] : [
        "yuan-progress-circle",
        props2.isAnimation ? "yuan-progress-circle-animation" : "",
        props2.roundCorner ? "yuan-progress-circle-b-r" : ""
      ];
    });
    let girth = "";
    const formatPercent = computed$1(() => {
      if (props2.progressType === "line") {
        return {
          text: props2.setPercentText(props2.percent),
          width: props2.percent >= 100 ? "100%" : props2.percent + "%"
        };
      } else {
        let circlePercent = props2.percent >= 100 ? 100 : props2.percent;
        const percentCircle = circlePercent / 100;
        const perimeter = Math.PI * 2 * (props2.circleSize / 2 - props2.circleHeight / 2);
        girth = perimeter;
        if (props2.progressType === "dashboard") {
          return {
            bgCircle: `${perimeter / 2}`,
            progressCircle: `${perimeter / 2 * percentCircle},${perimeter / 2}`,
            dashoffset: `-${perimeter / 2}`
          };
        } else {
          return circlePercent >= 100 ? {
            bgCircle: perimeter,
            progressCircle: `${perimeter * percentCircle} 0`
          } : {
            bgCircle: perimeter,
            progressCircle: `${perimeter * percentCircle} ${perimeter * (1 - percentCircle)}`
          };
        }
      }
    });
    const progressDashboardStyle = computed$1(() => {
      if (props2.progressType === "dashboard") {
        return {
          top: "40%"
        };
      }
      return {};
    });
    const progressDefaultStyle = computed$1(() => {
      if (props2.progressType === "line") {
        return {
          width: formatPercent.value.width,
          height: props2.progressHeight + "px",
          lineHeight: props2.progressHeight - 1 + "px",
          backgroundColor: progressBg.value,
          animationDuration: props2.progressSpeed + "s"
        };
      } else {
        const styleObj = {
          cx: props2.circleSize / 2,
          cy: props2.circleSize / 2,
          r: props2.circleSize / 2 - props2.circleHeight / 2,
          strokeWidth: props2.circleHeight,
          fill: "none",
          transform: `matrix(0,-1,1,0,0,${props2.circleSize})`,
          animationDuration: props2.progressSpeed + "s"
        };
        if (props2.progressType === "dashboard") {
          delete styleObj.transform;
        }
        return styleObj;
      }
    });
    const progressBg = computed$1(() => {
      let color;
      if (props2.bgColor && typeof props2.bgColor === "string") {
        return props2.bgColor;
      } else if (props2.bgColor && typeof props2.bgColor === "function") {
        return props2.bgColor(props2.percent);
      } else {
        switch (props2.currentStatus) {
          case "SUCCESS":
            color = "#09b63d";
            break;
          case "FAIL":
            color = "#ec3437";
            break;
          case "OTHER":
            color = "#f57b29";
            break;
          default:
            color = "#0e80eb";
        }
        return color;
      }
    });
    onUpdated(() => {
      const { progressType, isAnimation } = props2;
      if (progressType === "circle" && isAnimation) {
        findNoLinkSheet();
        addKeyframes();
      }
    });
    const animationArr = `100% {stroke-dasharray: ${formatPercent.value};stroke-dashoffset: ${-girth};}`;
    let sheetsIndex = "";
    const addKeyframes = () => {
      const styleSheets = document.styleSheets;
      if (styleSheets[0].cssRules[0][0] && styleSheets[0].cssRules[0][0].parentRule && styleSheets[0].cssRules[0][0].parentRule.name === "rotateAnimation") {
        return;
      }
      const Keyframes = `@keyframes rotateAnimation {${animationArr}}`;
      if (styleSheets[sheetsIndex].appendRule) {
        styleSheets[sheetsIndex].insertRule = styleSheets[sheetsIndex].appendRule;
      }
      styleSheets[sheetsIndex].insertRule(Keyframes);
    };
    const findNoLinkSheet = () => {
      const styleSheets = document.styleSheets;
      let ssLength = styleSheets.length;
      for (let i = 0; i < ssLength; i++) {
        try {
          styleSheets[i].cssRules || styleSheets[i].rules;
          if (!styleSheets[i].cssRules && !styleSheets[i].rules) {
            continue;
          }
        } catch {
          continue;
        }
        sheetsIndex = i;
        break;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        __props.progressType === "line" ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createElementVNode("div", {
            class: normalizeClass(backClass.value),
            style: normalizeStyle({ height: progressDefaultStyle.value.height })
          }, [
            createElementVNode("div", {
              class: normalizeClass(speedClass.value),
              style: normalizeStyle({
                width: progressDefaultStyle.value.width,
                lineHeight: progressDefaultStyle.value.lineHeight,
                backgroundColor: progressDefaultStyle.value.backgroundColor,
                animationDuration: progressDefaultStyle.value.animationDuration
              })
            }, [
              withDirectives(createElementVNode("span", null, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(formatPercent.value.text), 1)
                ], true)
              ], 512), [
                [vShow, __props.isShowText]
              ])
            ], 6)
          ], 6),
          withDirectives(createElementVNode("div", _hoisted_3$2, [
            createElementVNode("span", null, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(formatPercent.value.text), 1)
              ], true)
            ])
          ], 512), [
            [vShow, !__props.isShowText]
          ])
        ])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "yuan-progress-default-circle",
          style: normalizeStyle({ width: `${__props.circleSize}px`, height: `${__props.circleSize}px` })
        }, [
          (openBlock(), createElementBlock("svg", {
            style: normalizeStyle({ width: `${__props.circleSize}px`, height: `${__props.circleSize}px` }),
            viewbox: "0 0 100 100"
          }, [
            createElementVNode("circle", {
              stroke: "#dcdcdc",
              style: normalizeStyle(progressDefaultStyle.value),
              "stroke-dasharray": formatPercent.value.bgCircle,
              "stroke-dashoffset": formatPercent.value.dashoffset
            }, null, 12, _hoisted_4$2),
            createElementVNode("circle", {
              class: normalizeClass(speedClass.value),
              stroke: progressBg.value,
              style: normalizeStyle(progressDefaultStyle.value),
              "stroke-dasharray": formatPercent.value.progressCircle,
              "stroke-dashoffset": formatPercent.value.dashoffset
            }, null, 14, _hoisted_5$1)
          ], 4)),
          __props.isShowText ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "yuan-progress-circle-slot",
            style: normalizeStyle(progressDashboardStyle.value)
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(progressCircleText.value), 1)
            ], true)
          ], 4)) : createCommentVNode("", true)
        ], 4))
      ]);
    };
  }
});
const mProgress = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-46d8d367"]]);
mProgress.install = (app) => {
  app.component(mProgress.name, mProgress);
};
const index_vue_vue_type_style_index_0_scoped_10af3d18_lang = "";
const _hoisted_1$2 = { class: "yuan-color-picker-hd" };
const _hoisted_2$1 = { class: "yuan-color-picker-bd" };
const _hoisted_3$1 = { class: "t-color" };
const _hoisted_4$1 = ["onMouseenter", "onClick"];
const _hoisted_5 = { class: "color-panel" };
const _hoisted_6 = ["onMouseenter", "onClick"];
const _hoisted_7 = { class: "t-color" };
const _hoisted_8 = ["onMouseenter", "onClick"];
const _sfc_main$4 = /* @__PURE__ */ Object.assign({
  name: "mColorPicker"
}, {
  __name: "index",
  props: {
    modelValue: {
      type: String
    },
    defaultColor: {
      type: String,
      default: "#000000"
    },
    customClass: {
      type: String,
      require: false
    },
    autoClose: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    useCssVars((_ctx) => ({
      "v27c563b4": showColor.value
    }));
    const props2 = __props;
    const hoverColor = ref$2(null);
    const showColor = computed$1(() => {
      return hoverColor.value ?? props2.modelValue ?? props2.defaultColor;
    });
    const handleMouseEnter = (color) => {
      hoverColor.value = color;
    };
    const handleMouseLeave = () => {
      hoverColor.value = null;
    };
    const emit = __emit;
    const setColor = (color) => {
      emit("update:modelValue", color);
      emit("change", color);
      if (props2.autoClose) {
        close();
      }
    };
    onMounted(() => {
      const colorPicker = ref$2();
      const vm = getCurrentInstance();
      window.addEventListener("click", (e) => {
        if (colorPicker && !vm.vnode.el.contains(e.target)) {
          close();
        }
      });
    });
    const h5Color = ref$2("");
    const h5ColorRef = ref$2(null);
    const showH5ColorPanel = () => {
      h5ColorRef.value.click();
    };
    const tColor = [
      "#000000",
      "#ffffff",
      "#eeece1",
      "#1e497b",
      "#4e81bb",
      "#e2534d",
      "#9aba60",
      "#8165a0",
      "#47acc5",
      "#f9974c"
    ];
    const colorConfig = [
      ["#7f7f7f", "#f2f2f2"],
      ["#0d0d0d", "#808080"],
      ["#1c1a10", "#ddd8c3"],
      ["#0e243d", "#c6d9f0"],
      ["#233f5e", "#dae5f0"],
      ["#632623", "#f2dbdb"],
      ["#4d602c", "#eaf1de"],
      ["#3f3150", "#e6e0ec"],
      ["#1e5867", "#d9eef3"],
      ["#99490f", "#fee9da"]
    ];
    const colorPanel = computed$1(() => {
      const list = [];
      for (let item of colorConfig) {
        list.push(gradient(item[1], item[0], 5));
      }
      return list;
    });
    const bColor = [
      "#c21401",
      "#ff1e02",
      "#ffc12a",
      "#ffff3a",
      "#90cf5b",
      "#00af57",
      "#00afee",
      "#0071be",
      "#00215f",
      "#72349d"
    ];
    const gradient = (startColor, endColor, step) => {
      let sColor = hexToRgb(startColor);
      let eColor = hexToRgb(endColor);
      let rStep = (eColor[0] - sColor[0]) / step;
      let gStep = (eColor[1] - sColor[1]) / step;
      let bStep = (eColor[2] - sColor[2]) / step;
      let gradientColorArr = [];
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(
          rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2]))
        );
      }
      return gradientColorArr;
    };
    const parseColor = (hexStr) => {
      if (hexStr.length === 4) {
        hexStr = "#" + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3];
      } else {
        return hexStr;
      }
    };
    const rgbToHex = (r, g, b) => {
      let hex = (r << 16 | g << 8 | b).toString(16);
      return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
    };
    const hexToRgb = (hex) => {
      hex = parseColor(hex);
      let rgb = [];
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
      }
      return rgb;
    };
    const isShow = ref$2(false);
    const show = () => {
      isShow.value = true;
    };
    const close = () => {
      isShow.value = false;
    };
    const toggle = () => {
      isShow.value = !isShow.value;
    };
    __expose({
      show,
      close,
      toggle
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          isShow.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "colorPicker",
            class: normalizeClass(["yuan-color-picker", __props.customClass])
          }, [
            createElementVNode("div", _hoisted_1$2, [
              _cache[3] || (_cache[3] = createElementVNode("span", { class: "hd-color-preview" }, null, -1)),
              createElementVNode("span", {
                class: "default-color-text",
                onClick: _cache[0] || (_cache[0] = ($event) => setColor(props2.defaultColor))
              }, "默认颜色")
            ]),
            createElementVNode("div", _hoisted_2$1, [
              _cache[4] || (_cache[4] = createElementVNode("p", null, "主题颜色", -1)),
              createElementVNode("ul", _hoisted_3$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(tColor, (color, index) => {
                  return createElementVNode("li", {
                    key: index,
                    style: normalizeStyle({ backgroundColor: color }),
                    onMouseenter: ($event) => handleMouseEnter(color),
                    onMouseleave: handleMouseLeave,
                    onClick: ($event) => setColor(color)
                  }, null, 44, _hoisted_4$1);
                }), 64))
              ]),
              createElementVNode("ul", _hoisted_5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(colorPanel.value, (item, index) => {
                  return openBlock(), createElementBlock("li", { key: index }, [
                    createElementVNode("ul", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item, (color, innerIndex) => {
                        return openBlock(), createElementBlock("li", {
                          key: innerIndex,
                          style: normalizeStyle({ backgroundColor: color }),
                          onMouseenter: ($event) => handleMouseEnter(color),
                          onMouseleave: handleMouseLeave,
                          onClick: ($event) => setColor(color)
                        }, null, 44, _hoisted_6);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ]),
              _cache[5] || (_cache[5] = createElementVNode("p", null, "标准颜色", -1)),
              createElementVNode("ul", _hoisted_7, [
                (openBlock(), createElementBlock(Fragment, null, renderList(bColor, (color, index) => {
                  return createElementVNode("li", {
                    key: index,
                    style: normalizeStyle({ backgroundColor: color }),
                    onMouseenter: ($event) => handleMouseEnter(color),
                    onMouseleave: handleMouseLeave,
                    onClick: ($event) => setColor(color)
                  }, null, 44, _hoisted_8);
                }), 64))
              ]),
              createElementVNode("p", { onClick: showH5ColorPanel }, "更多颜色"),
              withDirectives(createElementVNode("input", {
                type: "color",
                hidden: "",
                ref_key: "h5ColorRef",
                ref: h5ColorRef,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => h5Color.value = $event),
                onChange: _cache[2] || (_cache[2] = ($event) => setColor(h5Color.value))
              }, null, 544), [
                [vModelText, h5Color.value]
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const mColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-10af3d18"]]);
mColorPicker.install = (app) => {
  app.component(mColorPicker.name, mColorPicker);
};
const index_vue_vue_type_style_index_0_lang = "";
const props = {
  customClass: String,
  separator: {
    type: String,
    default: "/"
  },
  space: {
    type: Number,
    default: 5
  }
};
const _sfc_main$3 = {
  name: "mBreadcrumb",
  props,
  render(props2) {
    const slots = useSlots$1();
    const items = slots.default();
    const wrapItems = [];
    items.forEach((item, index) => {
      wrapItems.push(item);
      if (index < items.length - 1) {
        wrapItems.push(
          h(
            "span",
            {
              style: { margin: `0 ${props2.space}px` }
            },
            props2.separator
          )
        );
      }
    });
    return h(
      "div",
      {
        class: `m-breadcrumb ${props2.customClass ?? ""}`
      },
      wrapItems
    );
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({
  name: "mBreadcrumbItem"
}, {
  __name: "breadcrumbItem",
  props: {
    customClass: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yuan-breadcrumb-item", __props.customClass])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
_sfc_main$3.install = (app) => {
  app.component(_sfc_main$3.name, _sfc_main$3);
  app.component(_sfc_main$2.name, _sfc_main$2);
};
const index_vue_vue_type_style_index_0_scoped_08851f1a_lang = "";
const _hoisted_1$1 = { class: "yuan-badge" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 1,
  class: "isdot"
};
const _sfc_main$1 = {
  __name: "index",
  props: {
    value: String | Number,
    hidden: {
      type: Boolean,
      default: false
    },
    isDot: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "danger"
    },
    max: {
      type: Number,
      default: 99
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        withDirectives(createElementVNode("div", null, [
          !__props.isDot ? (openBlock(), createElementBlock("sup", {
            key: 0,
            class: normalizeClass([__props.type, "badge"])
          }, [
            typeof __props.value === "number" ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(__props.value <= __props.max ? __props.value : `${__props.max}+`), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(__props.value), 1))
          ], 2)) : (openBlock(), createElementBlock("sup", _hoisted_4))
        ], 512), [
          [vShow, !__props.hidden]
        ])
      ]);
    };
  }
};
const mBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-08851f1a"]]);
mBadge.install = (app) => {
  app.component(mBadge.name, mBadge);
};
const index_vue_vue_type_style_index_0_scoped_3df62047_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "yuan-divider-title"
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "mDivider"
}, {
  __name: "index",
  props: {
    position: {
      type: String,
      default: "left"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    lineStyle: {
      type: String,
      default: "solid"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["yuan-divider", { "yuan-vertical": __props.direction === "vertical" }]),
        style: normalizeStyle({ "justify-content": __props.position, "border-top": `1px ${__props.lineStyle} #dcdfe6` })
      }, [
        __props.position ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 6);
    };
  }
});
const mDivider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3df62047"]]);
mDivider.install = (app) => {
  app.component(mDivider.name, mDivider);
};
const components = [
  { name: "mButton", component: _sfc_main$A },
  { name: "mInput", component: mInput },
  { name: "mTable", component: mTable },
  { name: "mSelect", component: mSelect },
  { name: "mDropdown", component: mDropdown },
  { name: "mRadio", component: mRadio },
  { name: "mCheckbox", component: mCheckbox },
  { name: "mModal", component: mModal },
  { name: "mDrawer", component: mDrawer },
  { name: "mSwitch", component: mSwitch },
  { name: "mTree", component: _sfc_main$m },
  { name: "mOptfile", component: mOptfile },
  { name: "mTextarea", component: mTextarea },
  { name: "mRow", component: mRow },
  { name: "mCol", component: mCol },
  { name: "mPagination", component: mPagination },
  { name: "mDate", component: mDate },
  { name: "mBacktop", component: mBacktop },
  { name: "mCollapse", component: mCollapse },
  { name: "mCollapseItem", component: mCollapseItem },
  { name: "mMenu", component: mMenu },
  { name: "mTabs", component: mTabs },
  { name: "mSpace", component: _sfc_main$7 },
  { name: "mPopover", component: mPopover },
  { name: "mProgress", component: mProgress },
  { name: "mColorPicker", component: mColorPicker },
  { name: "mBreadcrumb", component: _sfc_main$3 },
  { name: "mBadge", component: mBadge },
  { name: "mDivider", component: mDivider }
];
const install = (app) => {
  components.forEach(({ name, component }) => {
    app.component(name, component);
  });
  app.config.globalProperties.$message = Message;
  app.config.globalProperties.$Confirm = Confirm;
  app.config.globalProperties.$Loading = Loading;
  app.config.globalProperties.$yuan = $yuan;
};
const yuanUi = {
  version: "0.4.1",
  install
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export {
  $yuan,
  Confirm,
  Loading,
  Message,
  yuanUi as default,
  install,
  mBacktop,
  mBadge,
  _sfc_main$3 as mBreadcrumb,
  _sfc_main$A as mButton,
  mCheckbox,
  mCol,
  mCollapse,
  mCollapseItem,
  mColorPicker,
  mDate,
  mDivider,
  mDrawer,
  mDropdown,
  mInput,
  mMenu,
  mModal,
  mOptfile,
  mPagination,
  mPopover,
  mProgress,
  mRadio,
  mRow,
  mSelect,
  _sfc_main$7 as mSpace,
  mSwitch,
  mTable,
  mTabs,
  mTextarea,
  _sfc_main$m as mTree
};
