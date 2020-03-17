var Cake;
(function (Cake) {
    /**
     *
     * 根据指定条件测试结果返回与之相应的值。
     *
     * @param condition 测试条件，任意值或表达式。
     * @param valueIfTrue 条件测试结果为 true 时，返回的值。
     * @param valueIfFalse 条件测试结果为 false 时，返回的值。
     *
     * @returns 根据指定条件测试结果返回的与之相应的值。
     *
     */
    function determine(condition, valueIfTrue, valueIfFalse) {
        return !!condition ? valueIfTrue : valueIfFalse;
    }
    Cake.determine = determine;
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    /**
     *g
     * 提供关于本库的信息。
     *
     */
    class About {
        /**
         *
         * 获取本库的当前版本号。
         *
         * @returns {string} 本库的当前版本号。
         */
        static get version() {
            return this.$version;
        }
    }
    /**
     *
     * 本库的当前版本号。
     *
     */
    About.$version = "0.0.0.0";
    Cake.About = About;
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    /**
     *
     * 提供有关当前环境和平台的信息以及操作它们的方法。
     *
     */
    class Environment {
        /**
         *
         * 获取一个值，该值指示当前环境是否处于设计模式。
         *
         * @returns {boolean} 指示当前环境是否处于设计模式。
         */
        static get isDesignMode() {
            return this.$isDesignMode;
        }
        /**
         *
         * 设置一个值，该值指示当前环境是否处于设计模式。
         *
         * @param {boolean} value - 指示当前环境是否处于设计模式。
         *
         */
        static set isDesignMode(value) {
            this.$isDesignMode = value;
        }
        /**
         *
         * 获取一个值，该值指示当前环境是否处于调试模式。
         *
         * @returns {boolean} 指示当前环境是否处于调试模式。
         */
        static get isDebugMode() {
            return this.$isDebugMode;
        }
        /**
         *
         * 设置一个值，该值指示当前环境是否处于调试模式。
         *
         * @param {boolean} value - 指示当前环境是否处于调试模式。
         *
         */
        static set isDebugMode(value) {
            this.$isDebugMode = value;
        }
        /**
         *
         * 获取指定环境变量的值。
         *
         * @param {string} key - 环境变量的名称。
         * @returns {string} 若存在指定环境变量则返回其值，否则返回 null。
         */
        static getVariable(key) {
            if (this.$variables.has(key)) {
                return this.$variables.get(key);
            }
            return null;
        }
        /**
         *
         * 创建、修改或删除环境变量。
         *
         * @param {string} key - 环境变量名称。
         * @param {string} value - 环境变量值。
         */
        static setVariable(key, value) {
            if (key == null) {
                return;
            }
            if (value == null) {
                if (this.$variables.has(key)) {
                    this.$variables.delete(key);
                }
                return;
            }
            this.$variables.set(key, value);
        }
        /**
         *
         * 获取所有环境变量及其值。
         *
         * @returns {Map<string, string>} 所有环境变量及其值。
         */
        static getVariables() {
            return new Map(this.$variables);
        }
        /**
         *
         * 获取本库的当前版本号。
         *
         * @returns {string} 本库的当前版本号。
         */
        static get version() {
            return Cake.About.version;
        }
    }
    /**
     *
     * 环境变量。
     *
     */
    Environment.$variables = new Map();
    /**
     *
     * 指示当前环境是否处于设计模式。
     *
     */
    Environment.$isDesignMode = false;
    /**
     *
     * 指示当前环境是否处于调试模式。
     *
     */
    Environment.$isDebugMode = false;
    Cake.Environment = Environment;
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    /**
     *
     * 提供一组调试时相关的静态方法。
     *
     */
    class Debugger {
        /**
         *
         * 根据当前环境是否处于调试模式返回与之相应的值。
         *
         * @param valueIfTrue 当前环境处于调试模式时，返回的值。
         * @param valueIfFalse 当前环境处于非调试模式时，返回的值。
         *
         * @returns 根据当前环境是否处于调试模式返回的与之相应的值。
         *
         */
        static determine(valueIfTrue, valueIfFalse) {
            return Cake.Environment.isDebugMode ? valueIfTrue : valueIfFalse;
        }
    }
    Cake.Debugger = Debugger;
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    /**
     *
     * 提供一组设计时相关的静态方法。
     *
     */
    class Designer {
        /**
         *
         * 根据当前环境是否处于设计模式返回与之相应的值。
         *
         * @param valueIfTrue 当前环境处于设计模式时，返回的值。
         * @param valueIfFalse 当前环境处于非设计模式时，返回的值。
         *
         * @returns 根据当前环境是否处于设计模式返回的与之相应的值。
         *
         */
        static determine(valueIfTrue, valueIfFalse) {
            return Cake.Environment.isDesignMode ? valueIfTrue : valueIfFalse;
        }
    }
    Cake.Designer = Designer;
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    class Logger {}
    Cake.Logger = Logger;
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Extension;
    (function (Extension) {
        /**
         *
         * 提供一组用于数组操作的静态方法。
         *
         */
        class ArrayExtensions {
            static register() {
                const self = this;
                Array.prototype[Cake.Ale.capacity] = function () {
                    // ReSharper disable once SuspiciousThisUsage
                    return self.capacity(this);
                };
            }
            /**
             *
             * 获取源数组中包含的元素数，即源数组的长度。
             *
             * @param source 源数组。
             *
             * @returns {number} 源数组中包含的元素数，即源数组的长度。
             *
             */
            static capacity(source) {
                return source.length;
            }
            /**
             *
             * 获取源数组中包含的元素数，即源数组的长度。
             *
             * @param source 源数组。
             *
             * @returns {number} 源数组中包含的元素数，即源数组的长度。
             *
             */
            static count(source) {
                return source.length;
            }
            /**
             *
             * 将指定元素添加到源数组的结尾处。
             *
             * @param source 源数组。
             * @param item 要添加到源数组末尾的元素。
             *
             */
            static add(source, item) {
                source.push(item);
            }
            /**
             *
             * 将指定数组的元素添加到源数组的末尾。
             *
             * @param source 源数组。
             * @param items 应将其元素添加到源数组的末尾的数组。
             *
             */
            static addRange(source, items) {
                for (let i = 0; i < items.length; i++) {
                    source.push(items[i]);
                }
            }
            /**
             *
             * 从源数组中移除所有元素。
             *
             * @param source 源数组。
             *
             */
            static clear(source) {
                source.length = 0;
            }
            /**
             *
             * 确定某元素是否在源数组中。
             *
             * @param source 源数组。
             * @param item 要在源数组中定位的元素。
             *
             * @returns {boolean} 如果在源数组中找到指定元素，则为 true；否则为 false。
             *
             */
            static contains(source, item) {
                return source.indexOf(item) >= 0;
            }
            /**
             *
             * 将源数组中的元素转换为另一种类型，并返回包含已转换元素的数组。
             *
             * @template {TSource}
             * @template {TOutput}
             *
             * @param {TSource[]} source - 源数组。
             * @param {function(TSource):TOutput} converter - 一个函数，可将每个元素从一种类型转换为另一种类型。
             *
             * @returns {TOutput[]} - 目标类型的数组，包含源数组中转换后的元素。
             *
             */
            static convertAll(source, converter) {
                const output = new Array();
                for (let i = 0; i < source.length; i++) {
                    output.push(converter(source[i]));
                }
                return output;
            }
        }
        Extension.ArrayExtensions = ArrayExtensions;
    })(Extension = Cake.Extension || (Cake.Extension = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Extension;
    (function (Extension) {
        Extension.arrayExtensions = Extension.ArrayExtensions;
    })(Extension = Cake.Extension || (Cake.Extension = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Ui;
    (function (Ui) {
        var ToastOption;
        (function (ToastOption) {
            /**
             *
             * 可选的土司类型。
             *
             */
            let Type;
            (function (Type) {
                /**
                 *
                 * 自定义。
                 *
                 */
                Type.custom = "custom";
                /**
                 *
                 * 错误。
                 *
                 */
                Type.error = "error";
                /**
                 *
                 * 消息。
                 *
                 */
                Type.info = "info";
                /**
                 *
                 * 成功。
                 *
                 */
                Type.success = "success";
                /**
                 *
                 * 警告。
                 *
                 */
                Type.warning = "warning";
            })(Type = ToastOption.Type || (ToastOption.Type = {}));
        })(ToastOption = Ui.ToastOption || (Ui.ToastOption = {}));
    })(Ui = Cake.Ui || (Cake.Ui = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Ui;
    (function (Ui) {
        /**
         * todo:
         */
        class Dialog {
            /** Creates an alert dialog message containing a single "OK" button. */
            static alert(message, title) {
                return DevExpress.ui.dialog.alert(message, title);
            }
            /** Creates a confirm dialog that contains "Yes" and "No" buttons. */
            static confirm(message, title) {
                return DevExpress.ui.dialog.confirm(message, title);
            }
            /** Creates a custom dialog. */
            static custom(options) {}
        }
        Ui.Dialog = Dialog;
    })(Ui = Cake.Ui || (Cake.Ui = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Ui;
    (function (Ui) {
        /**
         *
         * 提供一组与加载框相关的静态方法。
         *
         */
        class LoadPanel {
            /**
             *
             * 使用指定设置创建一个新的加载框。
             *
             * @param messageOrOptions 在加载框中显示的文本消息或指定的设置。若该值为 null 或 undefined，则显示默认文本消息；若该值为空字符串，则不显示文本消息；若该值为对象，则使用该对象初始化加载框。
             * @param indicatorSrc 在加载框中显示的作为指示器的图片的地址。若 messageOrOptions 为对象，则忽略该选项；若该值为 null 或 undefined，则使用默认图片；若该值为空字符串，则不显示指示器。
             *
             * @returns 一个新的加载框。
             *
             */
            static create(messageOrOptions, indicatorSrc) {
                let options = {};
                if (indicatorSrc == null || indicatorSrc == undefined) {
                    options.indicatorSrc = this.$defaultOptions.indicatorSrc;
                } else if (indicatorSrc === "") {
                    options.showIndicator = false;
                } else {
                    options.indicatorSrc = indicatorSrc;
                }
                if (messageOrOptions == null || messageOrOptions == undefined) {
                    options.message = this.$defaultOptions.message;
                } else if (typeof messageOrOptions == "string") {
                    options.message = messageOrOptions;
                } else {
                    options = messageOrOptions;
                }
                return new DevExpress.ui.dxLoadPanel(document.body.appendChild(document.createElement("div")), options);
            }
            /**
             *
             * 销毁指定加载框，并移除其容器元素。
             *
             * @param loadPanel 要销毁的加载框。
             *
             */
            static dispose(loadPanel) {
                if (!loadPanel) {
                    return null;
                }
                const promise = loadPanel.hide();
                const container = loadPanel.element();
                loadPanel.dispose();
                container.remove();
                return promise;
            }
            /**
             *
             * 使用指定设置显示加载框。
             *
             * @param messageOrOptions 在加载框中显示的文本消息或指定的设置。若该值为 null 或 undefined，则显示默认文本消息；若该值为空字符串，则不显示文本消息；若该值为对象，则使用该对象初始化加载框。
             * @param indicatorSrc 在加载框中显示的作为指示器的图片的地址。若 messageOrOptions 为对象，则忽略该选项；若该值为 null 或 undefined，则使用默认图片；若该值为空字符串，则不显示指示器。
             */
            static show(messageOrOptions, indicatorSrc) {
                if (!this.$staticLoadPanel) {
                    this.$staticLoadPanel = this.create(messageOrOptions, indicatorSrc);
                }
                return this.$staticLoadPanel.show();
            }
            /**
             *
             * 关闭并销毁加载框。
             *
             */
            static close() {
                return this.dispose(this.$staticLoadPanel);
            }
        }
        /**
         *
         * 加载框的默认设置。
         *
         */
        LoadPanel.$defaultOptions = {
            indicatorSrc: "",
            message: "正在执行，请稍候..."
        };
        Ui.LoadPanel = LoadPanel;
    })(Ui = Cake.Ui || (Cake.Ui = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Ui;
    (function (Ui) {
        /**
         * todo:
         */
        class Message {
            static notify(messageOrOptions, type, displayTime) {
                if (typeof messageOrOptions == "string") {
                    DevExpress.ui.notify(messageOrOptions, type, displayTime);
                } else {
                    DevExpress.ui.notify(messageOrOptions, type, displayTime);
                }
            }
        }
        Ui.Message = Message;
    })(Ui = Cake.Ui || (Cake.Ui = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Ui;
    (function (Ui) {
        /**
         *
         * 提供一组与土司相关的静态方法。
         *
         */
        class Toast {
            /**
             *
             * 使用指定设置创建一个新的土司。
             *
             * @param messageOrOptions 在土司中显示的文本消息或指定的设置。若该值为 null 或 undefined，则显示默认文本消息；若该值为空字符串，则不显示文本消息；若该值为对象，则使用该对象初始化土司。
             * @param type 消息类型。为以下值之一："error" | "info" | "success" | "warning"。若该值非以上值之一，则使用默认消息类型；若 messageOrOptions 为对象，则忽略该选项。
             * @param displayTimeOrManualClose 土司显示的时长或指定是否手动关闭。若该值为 null 或 undefined，则使用默认时长；若该值为 number，则使用该数字指定的时长；若该值为 boolean，则该值指定是否手动关闭土司。若 messageOrOptions 为对象，则忽略该选项。
             *
             * @returns 一个新的土司。
             *
             */
            static create(messageOrOptions, type, displayTimeOrManualClose) {
                let options = {};
                $.extend(options, this.$defaultAutoCloseOptions);
                if (type === Ui.ToastOption.Type.error || type === Ui.ToastOption.Type.info || type === Ui.ToastOption.Type.success || type === Ui.ToastOption.Type.warning) {
                    options.type = type;
                }
                if (typeof displayTimeOrManualClose == "number") {
                    options.displayTime = displayTimeOrManualClose;
                } else if (typeof displayTimeOrManualClose == "boolean") {
                    if (displayTimeOrManualClose) {
                        $.extend(options, this.$defaultManualCloseOptions);
                    }
                }
                if (messageOrOptions == null || messageOrOptions == undefined) {} else if (typeof messageOrOptions == "string") {
                    options.message = messageOrOptions;
                } else {
                    options = messageOrOptions;
                }
                return new DevExpress.ui.dxToast(document.body.appendChild(document.createElement("div")), options);
            }
            /**
             *
             * 销毁指定土司，并移除其容器元素。
             *
             * @param toast 要销毁的土司。
             *
             */
            static dispose(toast) {
                if (!toast) {
                    return null;
                }
                const promise = toast.hide();
                const container = toast.element();
                toast.dispose();
                container.remove();
                return promise;
            }
            /**
             *
             * 使用指定设置显示土司。
             *
             * @param messageOrOptions 在土司中显示的文本消息或指定的设置。若该值为 null 或 undefined，则显示默认文本消息；若该值为空字符串，则不显示文本消息；若该值为对象，则使用该对象初始化土司。
             * @param type 消息类型。为以下值之一："error" | "info" | "success" | "warning"。若该值非以上值之一，则使用默认消息类型；若 messageOrOptions 为对象，则忽略该选项。
             * @param displayTimeOrManualClose 土司显示的时长或指定是否手动关闭。若该值为 null 或 undefined，则使用默认时长；若该值为 number，则使用该数字指定的时长；若该值为 boolean，则该值指定是否手动关闭土司。若 messageOrOptions 为对象，则忽略该选项。
             *
             */
            static show(messageOrOptions, type, displayTimeOrManualClose) {
                if (!this.$staticToast) {
                    this.$staticToast = this.create(messageOrOptions, type, displayTimeOrManualClose);
                }
                return this.$staticToast.show();
            }
            /**
             *
             * 使用指定设置显示消息类型为错误的土司。
             *
             * @param message 在土司中显示的文本消息。若该值为 null 或 undefined，则显示默认文本消息；若该值为空字符串，则不显示文本消息。
             * @param displayTimeOrManualClose 土司显示的时长或指定是否手动关闭。若该值为 null 或 undefined，则使用默认时长；若该值为 number，则使用该数字指定的时长；若该值为 boolean，则该值指定是否手动关闭土司。
             *
             */
            static showError(message, displayTimeOrManualClose) {
                return this.show(message, Ui.ToastOption.Type.error, displayTimeOrManualClose);
            }
            /**
             *
             * 使用指定设置显示消息类型为消息的土司。
             *
             * @param message 在土司中显示的文本消息。若该值为 null 或 undefined，则显示默认文本消息；若该值为空字符串，则不显示文本消息。
             * @param displayTimeOrManualClose 土司显示的时长或指定是否手动关闭。若该值为 null 或 undefined，则使用默认时长；若该值为 number，则使用该数字指定的时长；若该值为 boolean，则该值指定是否手动关闭土司。
             *
             */
            static showInfo(message, displayTimeOrManualClose) {
                return this.show(message, Ui.ToastOption.Type.info, displayTimeOrManualClose);
            }
            /**
             *
             * 使用指定设置显示消息类型为成功的土司。
             *
             * @param message 在土司中显示的文本消息。若该值为 null 或 undefined，则显示默认文本消息；若该值为空字符串，则不显示文本消息。
             * @param displayTimeOrManualClose 土司显示的时长或指定是否手动关闭。若该值为 null 或 undefined，则使用默认时长；若该值为 number，则使用该数字指定的时长；若该值为 boolean，则该值指定是否手动关闭土司。
             *
             */
            static showSuccess(message, displayTimeOrManualClose) {
                return this.show(message, Ui.ToastOption.Type.success, displayTimeOrManualClose);
            }
            /**
             *
             * 使用指定设置显示消息类型为警告的土司。
             *
             * @param message 在土司中显示的文本消息。若该值为 null 或 undefined，则显示默认文本消息；若该值为空字符串，则不显示文本消息。
             * @param displayTimeOrManualClose 土司显示的时长或指定是否手动关闭。若该值为 null 或 undefined，则使用默认时长；若该值为 number，则使用该数字指定的时长；若该值为 boolean，则该值指定是否手动关闭土司。
             *
             */
            static showWarning(message, displayTimeOrManualClose) {
                return this.show(message, Ui.ToastOption.Type.warning, displayTimeOrManualClose);
            }
            /**
             *
             * 关闭并销毁土司。
             *
             */
            static close() {
                return this.dispose(this.$staticToast);
            }
        }
        /**
         *
         * 自动关闭的土司的默认设置。
         *
         */
        Toast.$defaultAutoCloseOptions = {
            displayTime: 2000,
            message: "",
            type: Ui.ToastOption.Type.info
        };
        /**
         *
         * 手动关闭的土司的默认设置。
         *
         */
        Toast.$defaultManualCloseOptions = {
            closeOnBackButton: true,
            closeOnClick: true,
            closeOnOutsideClick: true,
            closeOnSwipe: true,
            displayTime: 2147483647
        };
        Ui.Toast = Toast;
    })(Ui = Cake.Ui || (Cake.Ui = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Ui;
    (function (Ui) {
        Ui.dialog = Ui.Dialog;
        Ui.loadPanel = Ui.LoadPanel;
        Ui.message = Ui.Message;
        Ui.toast = Ui.Toast;
    })(Ui = Cake.Ui || (Cake.Ui = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Util;
    (function (Util) {
        /**
         *
         * 提供一组用于数组操作的静态方法。
         *
         */
        class ArrayUtil {
            /**
             *
             * 将伴生函数注册到 Array 的原型链中。
             *
             */
            static register() {
                ArrayCompanion.register();
            }
            /**
             *
             * 获取源数组中包含的元素数，即源数组的长度。
             *
             * @param source 源数组。
             *
             * @returns {number} 源数组中包含的元素数，即源数组的长度。
             *
             */
            static capacity(source) {
                return source.length;
            }
            /**
             *
             * 获取源数组中包含的元素数，即源数组的长度。
             *
             * @param source 源数组。
             *
             * @returns {number} 源数组中包含的元素数，即源数组的长度。
             *
             */
            static count(source) {
                return source.length;
            }
            /**
             *
             * 将指定元素添加到源数组的结尾处。
             *
             * @param source 源数组。
             * @param item 要添加到源数组末尾的元素。
             *
             */
            static add(source, item) {
                source.push(item);
            }
            /**
             *
             * 将指定数组的元素添加到源数组的末尾。
             *
             * @param source 源数组。
             * @param items 应将其元素添加到源数组的末尾的数组。
             *
             */
            static addRange(source, items) {
                for (let i = 0; i < items.length; i++) {
                    source.push(items[i]);
                }
            }
            /**
             *
             * 从源数组中移除所有元素。
             *
             * @param source 源数组。
             *
             */
            static clear(source) {
                source.length = 0;
            }
            /**
             *
             * 确定某元素是否在源数组中。
             *
             * @param source 源数组。
             * @param item 要在源数组中定位的元素。
             *
             * @returns {boolean} 如果在源数组中找到指定元素，则为 true；否则为 false。
             *
             */
            static contains(source, item) {
                return source.indexOf(item) >= 0;
            }
            /**
             *
             * 将源数组中的元素转换为另一种类型，并返回包含已转换元素的数组。
             *
             * @template {TSource}
             * @template {TOutput}
             *
             * @param {TSource[]} source - 源数组。
             * @param {function(TSource):TOutput} converter - 一个函数，可将每个元素从一种类型转换为另一种类型。
             *
             * @returns {TOutput[]} - 目标类型的数组，包含源数组中转换后的元素。
             *
             */
            static convertAll(source, converter) {
                const output = new Array();
                for (let i = 0; i < source.length; i++) {
                    output.push(converter(source[i]));
                }
                return output;
            }
        }
        Util.ArrayUtil = ArrayUtil;
        /**
         *
         * 提供一组用于数组操作的伴生函数。
         *
         */
        let ArrayCompanion;
        (function (ArrayCompanion) {
            /**
             *
             * 将伴生函数注册到 Array 的原型链中。
             *
             */
            function register() {
                Array.prototype[Cake.Ale.capacity] = capacity;
                Array.prototype[Cake.Ale.count] = count;
                Array.prototype[Cake.Ale.add] = add;
                Array.prototype[Cake.Ale.addRange] = addRange;
                Array.prototype[Cake.Ale.clear] = clear;
                Array.prototype[Cake.Ale.contains] = contains;
                Array.prototype[Cake.Ale.convertAll] = convertAll;
            }
            ArrayCompanion.register = register;
            /**
             *
             * 获取源数组中包含的元素数，即源数组的长度。
             *
             * @returns {number} 源数组中包含的元素数，即源数组的长度。
             *
             */
            function capacity() {
                return ArrayUtil.capacity(this);
            }
            /**
             *
             * 获取源数组中包含的元素数，即源数组的长度。
             *
             * @returns {number} 源数组中包含的元素数，即源数组的长度。
             *
             */
            function count() {
                return ArrayUtil.count(this);
            }
            /**
             *
             * 将指定元素添加到源数组的结尾处。
             *
             * @param item 要添加到源数组末尾的元素。
             */
            function add(item) {
                ArrayUtil.add(this, item);
            }
            /**
             *
             * 将指定数组的元素添加到源数组的末尾。
             *
             * @param items 应将其元素添加到源数组的末尾的数组。
             */
            function addRange(items) {
                ArrayUtil.addRange(this, items);
            }
            /**
             *
             * 从源数组中移除所有元素。
             *
             */
            function clear() {
                ArrayUtil.clear(this);
            }
            /**
             *
             * 确定某元素是否在源数组中。
             *
             * @param item 要在源数组中定位的元素。
             *
             * @returns {boolean} 如果在源数组中找到指定元素，则为 true；否则为 false。
             *
             */
            function contains(item) {
                return ArrayUtil.contains(this, item);
            }
            /**
             *
             * 将源数组中的元素转换为另一种类型，并返回包含已转换元素的数组。
             *
             * @template {TSource}
             * @template {TOutput}
             *
             * @param {function(TSource):TOutput} converter - 一个函数，可将每个元素从一种类型转换为另一种类型。
             *
             * @returns {TOutput[]} - 目标类型的数组，包含源数组中转换后的元素。
             *
             */
            function convertAll(converter) {
                return ArrayUtil.convertAll(this, converter);
            }
        })(ArrayCompanion || (ArrayCompanion = {}));
    })(Util = Cake.Util || (Cake.Util = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Util;
    (function (Util) {
        Util.arrayUtil = Util.ArrayUtil;
    })(Util = Cake.Util || (Cake.Util = {}));
})(Cake || (Cake = {}));
const cake = Cake;
var Cake;
(function (Cake) {
    Cake.extension = Cake.Extension;
    Cake.piper = Cake.Piper;
    Cake.ui = Cake.Ui;
    Cake.util = Cake.Util;
    Cake.about = Cake.About;
    Cake.ale = Cake.Ale;
    Cake.dbugger = Cake.Debugger;
    Cake.designer = Cake.Designer;
    Cake.environment = Cake.Environment;
    Cake.logger = Cake.Logger;
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    let Ale;
    (function (Ale) {
        /**
         *
         * 获取源中可包含的元素数。
         *
         */
        Ale.capacity = Symbol("Capacity");
        /**
         *
         * 获取源中包含的元素数。
         *
         */
        Ale.count = Symbol("Count");
        /**
         *
         * 将元素添加到源的结尾处。
         *
         */
        Ale.add = Symbol("Add");
        /**
         *
         * 将指定集合的元素添加到源的末尾。
         *
         */
        Ale.addRange = Symbol("AddRange");
        /**
         *
         * 从源中移除所有元素。
         *
         */
        Ale.clear = Symbol("Clear");
        /**
         *
         * 确定某元素是否在源中。
         *
         */
        Ale.contains = Symbol("Contains");
        /**
         *
         * 将源中的元素转换为另一种类型。
         *
         */
        Ale.convertAll = Symbol("ConvertAll");
        Ale.copyTo = Symbol("CopyTo");
        Ale.exists = Symbol("Exists");
        Ale.find = Symbol("Find");
        Ale.findAll = Symbol("FindAll");
        Ale.findLast = Symbol("FindLast");
        Ale.findLastIndex = Symbol("FindLastIndex");
        Ale.forEach = Symbol("ForEach");
        Ale.getRange = Symbol("GetRange");
        Ale.indexOf = Symbol("IndexOf");
        Ale.insert = Symbol("Insert");
        Ale.insertRange = Symbol("InsertRange");
        Ale.lastIndexOf = Symbol("LastIndexOf");
        Ale.remove = Symbol("Remove");
        Ale.removeAll = Symbol("RemoveAll");
        Ale.removeAt = Symbol("RemoveAt");
        Ale.removeRange = Symbol("RemoveRange");
        Ale.reverse = Symbol("Reverse");
        Ale.sort = Symbol("Sort");
        Ale.toArray = Symbol("ToArray");
        Ale.trueForAll = Symbol("TrueForAll");
        Ale.where = Symbol("Where");
        Ale.select = Symbol("Select");
        Ale.selectMany = Symbol("SelectMany");
        Ale.take = Symbol("Take");
        Ale.takeWhile = Symbol("TakeWhile");
        Ale.skip = Symbol("Skip");
        Ale.skipWhile = Symbol("SkipWhile");
        Ale.join = Symbol("Join");
        Ale.groupJoin = Symbol("GroupJoin");
        Ale.orderBy = Symbol("OrderBy");
        Ale.orderByDescending = Symbol("OrderByDescending");
        Ale.thenBy = Symbol("ThenBy");
        Ale.thenByDescending = Symbol("ThenByDescending");
        Ale.groupBy = Symbol("GroupBy");
        Ale.concat = Symbol("Concat");
        Ale.zip = Symbol("Zip");
        Ale.union = Symbol("Union");
        Ale.intersect = Symbol("Intersect");
        Ale.except = Symbol("Except");
        Ale.sequenceEqual = Symbol("SequenceEqual");
        Ale.toDictionary = Symbol("ToDictionary");
        Ale.toLookup = Symbol("ToLookup");
        Ale.defaultIfEmpty = Symbol("DefaultIfEmpty");
        Ale.ofType = Symbol("OfType");
        Ale.cast = Symbol("Cast");
        Ale.first = Symbol("First");
        Ale.firstOrDefault = Symbol("FirstOrDefault");
        Ale.last = Symbol("Last");
        Ale.lastOrDefault = Symbol("LastOrDefault");
        Ale.single = Symbol("Single");
        Ale.singleOrDefault = Symbol("SingleOrDefault");
        Ale.elementAt = Symbol("ElementAt");
        Ale.elementAtOrDefault = Symbol("ElementAtOrDefault");
        Ale.range = Symbol("Range");
        Ale.repeat = Symbol("Repeat");
        Ale.empty = Symbol("Empty");
        Ale.any = Symbol("Any");
        Ale.all = Symbol("All");
        Ale.aggregate = Symbol("Aggregate");
        Ale.sum = Symbol("Sum");
        Ale.min = Symbol("Min");
        Ale.max = Symbol("Max");
        Ale.average = Symbol("Average");
        Ale.append = Symbol("Append");
        Ale.prepend = Symbol("Prepend");
    })(Ale = Cake.Ale || (Cake.Ale = {}));
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    function init() {
        Cake.Util.ArrayUtil.register();
    }
    init();
})(Cake || (Cake = {}));
var Cake;
(function (Cake) {
    var Piper;
    (function (Piper) {
        function getAuthUrl(url) {
            return url + "?utoken=" + getQueryString("utoken");
        }
        Piper.getAuthUrl = getAuthUrl;



        function getQueryString(name) {
            const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            const r = window.location.search.substr(1).match(reg);

     
            if (r != null)
                return unescape(r[2]);
            return null;
        }

    })(Piper = Cake.Piper || (Cake.Piper = {}));
})(Cake || (Cake = {}));
//# sourceMappingURL=cake.js.map