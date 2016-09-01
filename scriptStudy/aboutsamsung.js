// about samsung ui script
//about library
var aboutLib = (function () {
    function openMenu(target) {
        var iconMinus = target.find('.icon-plus'), blind = iconMinus.find('.blind');
        target.addClass('on');
        iconMinus.removeClass().addClass('icon-minus');
        blind.text(iconMinus.attr('data-after-text'));
    }

    function closeMenu(target) {
        var iconPlus = target.find('.icon-minus'), blind = iconPlus.find('.blind');
        target.removeClass('on');
        iconPlus.removeClass().addClass('icon-plus');
        blind.text(iconPlus.attr('data-text'));
    }

    return {
        //about global var
        aboutVar: {},
        // s: LNB
        aboutLnb: {
            depthVar: {},
            //loading
            aboutLnbLoading: function (depth1, depth2, depth3, depth4, depth5) {
                this.depthVar.depth1 = depth1;
                this.depthVar.depth2 = depth2 || null;
                this.depthVar.depth3 = depth3 || null;
                this.depthVar.depth4 = depth4 || null;
                this.depthVar.depth5 = depth5 || null;
                this.loadingAction = function () {

                    //depth1
                    if (!$(".about_lnb > h3 a").hasClass("on")) {
                        closeMenu($(".about_lnb > h3 a"));
                        $('.about_lnb > ul').stop().hide();
                        $(".about_lnb > h3:eq(" + (depth1 - 1) + ") > a").addClass('selected').trigger("click");
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > a").addClass('selected');
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > ul > li:eq(" + (depth3 - 1) + ") > a").addClass('selected');

                    }
                    //depth2
                    if (aboutLib.aboutLnb.depthVar.depth3 == null) {
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > a").addClass("on");
                    } else {
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > a").trigger("click");
                    }
                    //depth3
                    if (aboutLib.aboutLnb.depthVar.depth4 == null) {
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > ul > li:eq(" + (depth3 - 1) + ") > a").addClass("on");
                    } else {
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > ul > li:eq(" + (depth3 - 1) + ") > a").trigger("click");
                    }
                    //depth4
                    if (aboutLib.aboutLnb.depthVar.depth5 == null) {
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > ul > li:eq(" + (depth3 - 1) + ") > ul > li:eq(" + (depth4 - 1) + ") > a").addClass("on");
                    } else {
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > ul > li:eq(" + (depth3 - 1) + ") > ul > li:eq(" + (depth4 - 1) + ") > a").trigger("click");
                        $("#about_lnb_0" + depth1 + " > li:eq(" + (depth2 - 1) + ") > ul > li:eq(" + (depth3 - 1) + ") > ul > li:eq(" + (depth4 - 1) + ") > ul > li:eq(" + (depth5 - 1) + ") > a").addClass("on");

                    }
                    setTimeout(aboutLib.startPst, 500);
                };
                if (aboutLib.aboutVar.checkDeviceId < 4) {
                    $(".about_lnb").addClass("mobile");
                }
                if (aboutLib.aboutVar.checkDeviceId > 3) {
                    $(".about_lnb").addClass("pc");
                }
                this.loadingAction();
            },
            aboutLnbReset: function () {
                if (aboutLib.aboutVar.checkDeviceId < 4) {
                    if (!$(".about_lnb").hasClass("mobile")) {
                        $(".about_lnb").removeClass("pc").addClass("mobile");
                        this.aboutLnbResetAction();
                    }
                }
                if (aboutLib.aboutVar.checkDeviceId > 3) {
                    if (!$(".about_lnb").hasClass("pc")) {
                        $(".about_lnb").removeClass("mobile").addClass("pc");
                        this.aboutLnbResetAction();
                        this.loadingAction();
                    }
                }
            },
            aboutLnbResetAction: function (reset) {
                closeMenu($(".about_lnb *"));
                /*$(".about_lnb *").removeClass("on");
                 $(".about_lnb *").find(".icon-minus").removeClass().addClass("icon-plus");*/
                $(".about_lnb ul").hide();
            },
            aboutLnbAction: function (name) {
                name = name || {};
                var depth1 = name.depth1;
                var depth2 = name.depth2 || "null";
                var depth3 = name.depth3 || "null";
                var depth4 = name.depth4 || "null";
                var naviBtn = $(depth1 + "," + depth2 + "," + depth3 + "," + depth4);
                //event action
                var action = {
                    click: function (e) {
                        var eTarget = e.currentTarget;
                        var sTarget = eTarget.hash;
                        if ($(".about_lnb").hasClass("pc")) {
                            if ($(eTarget).hasClass("on")) {
                                this.close(sTarget, eTarget);
                            } else {
                                this.open(sTarget, eTarget);
                            }
                        } else if ($(".about_lnb").hasClass("mobile")) {
                            if ($(eTarget).hasClass("on")) {
                                this.close(sTarget, eTarget);
                            } else {
                                this.init(sTarget, eTarget);
                                this.open(sTarget, eTarget);
                            }
                        }
                    },
                    init: function (sTarget, eTarget) {
                        if ($(eTarget).is(depth1)) {
                            $(depth1).each(function () {
                                var a = $(this).attr("href");
                                $(a).hide();
                                closeMenu($(this));
                                /*$(this).removeClass("on");
                                 $(this).find(".icon-minus").removeClass().addClass("icon-plus");*/
                            });
                        }
                        if ($(eTarget).is(depth2)) {
                            $(depth2).each(function () {
                                var a = $(this).attr("href");
                                $(a).slideUp();
                                closeMenu($(this));
                                /*$(this).removeClass("on");
                                 $(this).find(".icon-minus").removeClass().addClass("icon-plus");*/
                            });
                        }
                    },
                    open: function (sTarget, eTarget) {
                        openMenu($(eTarget));
                        /*$(eTarget).addClass("on");
                         $(eTarget).find(".icon-plus").removeClass().addClass("icon-minus");*/
                        $(sTarget).stop().slideDown();
                    },
                    close: function (sTarget, eTarget) {
                        closeMenu($(eTarget));
                        /*$(eTarget).removeClass("on");
                         $(eTarget).find(".icon-minus").removeClass().addClass("icon-plus");*/
                        $(sTarget).stop().slideUp();
                    }
                };
                //click event
                $(naviBtn).bind("click", function (e) {
                    action.click(e);
                    return false;
                });
            }
        },
        // s: Accordion Tab
        aboutAccordion: function (eBtn, showTab) {
            eBtn = eBtn;
            showTab = showTab || 0;
            //event action
            var action = {
                loading: function (showTab) {
                    action.count = 0;
                    $(eBtn).eq(showTab).trigger("click");
                },
                click: function (e) {
                    var eTarget = e.currentTarget;
                    var sTarget = eTarget.hash;
                    if ($(eTarget).hasClass("on")) {
                        this.close(sTarget, eTarget);
                    } else {
                        this.init(sTarget, eBtn);
                        this.open(sTarget, eTarget);
                    }
                },
                init: function (sTarget, eBtn) {
                    $(eBtn).each(function () {
                        var a = $(this).attr("href");
                        $(a).slideUp();
                        closeMenu($(this));
                        /*$(this).removeClass("on");
                         $(this).find(".icon-minus").removeClass().addClass("icon-plus");*/
                    });
                },
                open: function (sTarget, eTarget) {
                    openMenu($(eTarget));
                    /*$(eTarget).addClass("on");
                     $(eTarget).find(".icon-plus").removeClass().addClass("icon-minus");*/
                    $(sTarget).stop().slideDown(function () {
                        if (action.count > 0) {
                            action.move(eTarget);
                        }
                        action.count = 1;
                    });
                },
                close: function (sTarget, eTarget) {
                    closeMenu($(eTarget));
                    /*$(eTarget).removeClass("on");
                     $(eTarget).find(".icon-minus").removeClass().addClass("icon-plus");*/
                    $(sTarget).stop().slideUp();
                },
                move: function (eTarget) {
                    var pst = $(eTarget).offset().top;
                    $("body, html").animate({
                        "scrollTop": pst
                    }, 700);
                }
            };
            //click event
            $(eBtn).bind("click", function (e) {
                action.click(e);
                return false;
            });
            //loading event
            action.loading(showTab);
        },
        // Contents Tab
        contentsTab: function (eBtn, showTab) {
            eBtn = eBtn;
            showTab = showTab || 0;
            //event action
            var action = {
                loading: function () {
                    $(".tab_con").hide();
                    $(".tab_btn ul li").eq(showTab).find("a").trigger("click");
                },
                click: function (e) {
                    var eTarget = e.currentTarget;
                    $(".tab_btn ul li a.on").removeClass("on");
                    $(".tab_btn ul li a span.icon-arrow-on").attr("class", "icon icon-arrow-off");
                    $(eTarget).find("span.icon").attr("class", "icon icon-arrow-on");
                    $(eTarget).addClass("on");
                    var sTarget = $(eTarget).attr("href");
                    $(".tab_con").hide();
                    $(sTarget).show();
                }
            };
            //click event
            $(eBtn).bind("click", function (e) {
                action.click(e);
                return false;
            });
            //loading event
            action.loading(showTab);
        },
        //Page loading position at mobile device
        startPst: function (speed) {
            var speed = speed || 350;
            //mobile
            if (aboutLib.aboutVar.checkDeviceId < 4) {
                if (ss.metrics.isMobile() !== null) {
                    var pst = $(".about_page_title").offset().top;
                    $("body").animate({
                        "scrollTop": pst
                    }, speed);
                }
            }
        },
        //Quick navi move to bottom at mobile device
        moveNavi: function () {

            //mobile
            if (aboutLib.aboutVar.checkDeviceId < 4) {
                if ($(".about_content .about_quick").length === 0) {
                    $(".about_content").append( $(".about_quick").eq(0).clone() );
                }
                $(".about_content .about_quick").show();
                $(".about_nav .about_quick").hide();

            }
            //pc
            if (aboutLib.aboutVar.checkDeviceId > 3) {
                if ($(".about_nav .about_quick").length === 0) {
                    var about_quick = $(".about_quick").eq(0);
                    $(".ir_lnb, .sec_lnb").append(about_quick.clone());
                }
                $(".about_nav .about_quick").show();
                $(".about_content .about_quick").hide();
            }
        },
        visualPst: function () {
            var checkHeight = this.checkSize.crumbsHeight();
            if (!$(".hero").hasClass("img_gallery")) {
                $(".hero, .sub_visual").css({
                    "margin-top": -checkHeight
                });
            }
        },
        //check size
        checkSize: {
            //bread crumbs height
            crumbsHeight: function () {
                var a = $(".about_page_title").outerHeight();
                return a;
            }
        },
        //fix height
        fixHeight: function () {
            var fix = [];
            if ($(".main_page").length > 0) {
                refix(1);
            } else {
                refix(3);
            }
            function refix(a) {
                if (aboutLib.aboutVar.checkDeviceId > a) {
                    $(".fix_height").removeAttr("style");
                    var fixNum = new Array();
                    var compare = 0;
                    $(".fix_height").each(function (index) {
                        $(this).find("> *").each(function () {
                            fixNum.push($(this).outerHeight());
                        });
                        for (var i = 0; i < fixNum.length; i++) {
                            if (compare < fixNum[i]) {
                                compare = fixNum[i];
                            }
                        }
                        fix.push(compare);
                    });
                    $(".fix_height").each(function (index) {
                        $(this).css({
                            "height": fix[index]
                        });
                    });
                } else {
                    $(".fix_height").css({
                        "height": "auto"
                    });
                }
            }
        },
        fixImgBox: function () {
            var obj = ".box_layout .img, .preview_pic_box .pic";
            $(obj).each(function (index) {
                var a = $(this).parent().outerHeight();
                $(this).css({
                    "height": a
                });
                if (!$(this).find("img").hasClass("exc")) {
                    $(this).find("img").css({
                        "height": a
                    });
                }
            });
        },
        stripe: function () {
            var moduleName = ".stripe-table",
                moduleList = $(moduleName);
            if (moduleList.length < 1) {
                return;
            }
            //obj
            function stripeTableObj(a) {
                var obj = $(a),
                    tr = obj.find('tbody tr'),
                    rowSpan = this.findRowSpan(tr),
                    trGroup = this.makeGroup(tr),
                    group = this.reMakeGroup(trGroup, rowSpan),
                    thisData = obj.data("class"),
                    addClassName = thisData ? thisData : "bg_type_01";
                this.onClass(rowSpan, group, addClassName);
            }

            //find row span
            stripeTableObj.prototype.findRowSpan = function (obj) {
                var result = [];
                $(obj).each(function (index) {
                    var findTh = $(this).find('> th')[0],
                        findTd = $(this).find('> td')[0],
                        rowNum;
                    rowNum = findTh ? $(findTh).attr('rowspan') : $(findTd).attr('rowspan');
                    if (rowNum) {
                        result.push(index + "," + rowNum);
                    }
                });
                result = result.length > 0 ? result : null;
                return result;
            };
            //make tr group
            stripeTableObj.prototype.makeGroup = function (obj) {
                var trGroup = [];
                $(obj).each(function () {
                    trGroup.push(this);
                });
                return trGroup;
            };
            //remake tr group
            stripeTableObj.prototype.reMakeGroup = function (rg, rp) {
                if (!rp) {
                    return rg;
                } else {
                    var reTrGroup = rg;
                    for (var i = rp.length - 1; 0 <= i; i--) {
                        var set = rp[i].split(","),
                            start = Number(set[0]),
                            rowNum = Number(set[1]),
                            end = start + rowNum,
                            rowTr = reTrGroup.slice(start, end);
                        reTrGroup[start] = (rowTr);
                        reTrGroup.splice(start + 1, rowNum - 1);
                    }
                    return reTrGroup;
                }
            };
            //add class
            stripeTableObj.prototype.onClass = function (cq, ct, cn) {
                if (cq === null) {
                    for (var i = ct.length - 1; 0 <= i; i = i - 2) {
                        $(ct).eq(i).addClass(cn);
                    }
                } else {
                    for (var j = ct.length - 1; 0 <= j; j = j - 2) {
                        if ($(ct).eq(j)[0].length > 0) {
                            $($(ct).eq(j)[0]).each(function () {
                                $(this).addClass(cn);
                            });
                        } else {
                            $(ct).eq(j).addClass(cn);
                        }
                    }
                }
            };
            //make object
            for (var i = 0, j = moduleList.length; i < j; i++) {
                new stripeTableObj(moduleList[i]);
            }
        },
        remakeSkipNavi: function () {
            var focusItem = "about_content",
                accNav = $(".accNav"),
                skipAnchor = accNav.find("[href='#content']");
            $("."+focusItem).attr({
                "id": focusItem,
                "tabIndex": "0"
            });
            skipAnchor.attr("href","#"+ focusItem);
        }
    };
})();

function pop_type(type, src, w, h) {
    var newsrc = src.lastIndexOf(".");
    switch (type) {
        case 1 :
            var scroll = "yes";
            break;
        case 2 :
            var scroll = "no";
            break;
        case 3 :
            popup = window.open(src, "new" + h + "", 'fullscreen,scrollbars,width="100%",height="100%"');
            break;
        default :
            var scroll = "yes";
            break;
    }
    var winleft = (screen.width - w) / 2;
    var wintop = (screen.height - h) / 2;
    var poptype = 'width=' + w + ',height=' + h + ',top=' + wintop + ',left=' + winleft + ',resizable=no,scrollbars=' + scroll + ',toolbars=no,status=no,menu=no';
    window.open(src, "new" + h + "", poptype);
//	if (parseInt(navigator.appVersion) >= 4) { popup.window.focus(); }
}
// document ready

$(document).ready(function () {
    aboutLib.aboutVar.checkDeviceId = ss.metrics.deviceLayoutId;
    aboutLib.aboutLnb.aboutLnbAction({
        depth1: ".lnb_btn_01",
        depth2: ".lnb_btn_02",
        depth3: ".lnb_btn_03",
        depth4: ".lnb_btn_04"
    });
    aboutLib.aboutAccordion(".about_tab .opener a");
    aboutLib.contentsTab(".tab_btn a");
    aboutLib.moveNavi();
    aboutLib.fixImgBox();
    aboutLib.aboutLnb.aboutLnbLoading();
    aboutLib.stripe();
    aboutLib.remakeSkipNavi();
    //resize event
    eventBridge.on(eventDictionary.global.RESIZE, function () {
        aboutLib.aboutVar.checkDeviceId = ss.metrics.deviceLayoutId;
        aboutLib.fixHeight();
        aboutLib.fixImgBox();
        if (!ss.metrics.isIE8()) {
            aboutLib.moveNavi();
            aboutLib.aboutLnb.aboutLnbReset();
        }
    });
    /* [웹접근성] 본문 바로가기 링크 변경 : 2016-05-24 */
    $('#skipToContent').attr('href', '#about_content');

});
// window load
$(window).on("load", function () {
    aboutLib.fixHeight();
    aboutLib.fixImgBox();
});