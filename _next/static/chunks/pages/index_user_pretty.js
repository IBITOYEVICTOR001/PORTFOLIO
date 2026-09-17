(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405], {
    3685: function(e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
        return r(1680)
      }])
    },
    1680: function(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        default: function() {
          return me
        }
      });
      var n = r(5893),
        a = r(7294),
        o = r(1664),
        s = r(5675),
        i = function(e) {
          var t = e.variant,
            r = e.className;
          return (0, n.jsx)(o.default, {
            href: "/",
            children: (0, n.jsx)("a", {
              className: "leading-0 inline-block ".concat(null !== r && void 0 !== r ? r : ""),
              children: (0, n.jsx)(s.default, {
                width: 50,
                height: 55,
                src: "/images/logo-".concat(t, ".png")
              })
            })
          })
        };
      i.defaultProps = {
        variant: "light"
      };
      var l = i,
        c = r(6261),
        d = JSON.parse('[{"id":1,"name":"Home","href":"hero"},{"id":2,"name":"About","href":"about"},{"id":3,"name":"","href":""},{"id":4,"name":"Contact","href":"contact"},{"id":4,"name":"Buy Rokstar","href":"https://1.envato.market/react-rokstar"}]'),
        u = function(e) {
          var t = e.indexOf("http");
          return Boolean(t > -1)
        },
        f = "after:content-[attr(data-hover)] after:absolute after:left-1/2 after:top-3/4 after:opacity-0 after:-translate-x-1/2 hover:after:top-1/2 hover:after:opacity-100 after:hover:-translate-x-1/2 after:hover:-translate-y-1/2",
        m = "before:absolute before:h-[6px] before:w-[6px] before:rounded-full before:bg-white before:left-1/2 before:-translate-x-1/2 before:-bottom-3",
        h = function(e) {
          var t = e.className;
          return (0, n.jsx)("nav", {
            className: "navbar hidden sm:block ".concat(null !== t && void 0 !== t ? t : ""),
            children: (0, n.jsx)("ul", {
              className: "nav flex space-x-10",
              children: d.map((function(e) {
                return (0, n.jsx)("li", {
                  children: u(e.href) ? (0, n.jsx)("a", {
                    href: e.href,
                    target: "_blank",
                    "data-hover": e.name.toLowerCase(),
                    className: "block text-white font-medium text-sm relative cursor-pointer after:duration-300 ".concat(f),
                    children: (0, n.jsx)("span", {
                      className: "block duration-300",
                      children: e.name
                    })
                  }) : (0, n.jsx)(c.rU, {
                    spy: !0,
                    smooth: !0,
                    to: e.href,
                    activeClass: m,
                    "data-hover": e.name.toLowerCase(),
                    className: "block text-white font-medium text-sm relative cursor-pointer after:duration-300 ".concat(f),
                    children: (0, n.jsx)("span", {
                      className: "block duration-300",
                      children: e.name
                    })
                  })
                }, e.id)
              }))
            })
          })
        },
        b = function(e) {
          var t = e.className;
          return (0, n.jsx)("nav", {
            className: "bg-black overflow-hidden duration-300 sm:hidden ".concat(null !== t && void 0 !== t ? t : ""),
            children: (0, n.jsx)("ul", {
              className: "nav p-2",
              children: d.map((function(e) {
                return (0, n.jsx)("li", {
                  children: (0, n.jsx)(c.rU, {
                    spy: !0,
                    smooth: !0,
                    to: e.href,
                    "data-hover": e.name.toLowerCase(),
                    className: "block text-white font-medium text-sm relative cursor-pointer py-1 px-3 duration-400 hover:bg-white hover:text-dark",
                    children: e.name
                  })
                }, e.id)
              }))
            })
          })
        },
        x = r(6721),
        p = function() {
          var e = (0, a.useState)(0),
            t = e[0],
            r = e[1],
            n = function() {
              return r(window.scrollY)
            };
          return (0, a.useEffect)((function() {
            return window.addEventListener("scroll", n),
              function() {
                window.removeEventListener("scroll", n)
              }
          }), []), {
            position: t,
            setPosition: r
          }
        },
        g = function() {
          var e = p().position,
            t = (0, a.useState)(!1),
            r = t[0],
            o = t[1];
          return (0, n.jsx)("header", {
            className: "fixed bg-dark left-0 top-0 w-full z-30 duration-400 ".concat(e >= 200 ? "py-2" : "py-2 md:py-5"),
            children: (0, n.jsx)("div", {
              className: "container",
              children: (0, n.jsxs)("div", {
                className: "sm:flex items-center justify-between",
                children: [(0, n.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [(0, n.jsx)(l, {}), (0, n.jsx)("span", {
                    className: "sm:hidden",
                    children: (0, n.jsx)(x.p, {
                      toggled: r,
                      toggle: o,
                      size: 25,
                      color: "white"
                    })
                  })]
                }), (0, n.jsx)(h, {}), (0, n.jsx)(b, {
                  className: r ? "mt-3 h-[130px]" : "mt-0 h-0"
                })]
              })
            })
          })
        },
        v = JSON.parse('{"A":"<p>For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss; I\'d get kicked out on the spot.</p> <p>But who knows, maybe that would be the best thing for me. He\'d fall right off his desk! And it\'s a funny sort of business to be sitting up there at your desk, <br/> talking down at your subordinates. I ought to just try that witht my boss; I\'d get kicked out on the spot. But who knows, maybe that would be the best thing for me. He\'d fall right off his desk! And it\'s a funny sort of business to be sitting up there at your desk, talking down at your subordinates.</p>","Nb":"about-left-thumb.jpg","LF":[{"id":1,"media":"facebook","icon":"FaFacebookF","link":"https://fb.com/username"},{"id":2,"media":"twitter","icon":"FaTwitter","link":"https://twitter.com/username"},{"id":3,"media":"linkedin","icon":"FaLinkedinIn","link":"https://linkedin.com/in/username"},{"id":4,"media":"github","icon":"FaGithub","link":"https://github.com/username"}]}'),
        j = r(9583),
        w = function(e) {
          var t = e.className;
          return (0, n.jsxs)("div", {
            className: "flex items-center ".concat(null !== t && void 0 !== t ? t : ""),
            children: [(0, n.jsx)("h5", {
              className: "text-base mr-5 leading-none",
              children: "Share:"
            }), (0, n.jsx)("ul", {
              className: "flex space-x-4",
              children: v.LF.map((function(e) {
                var t = j[e.icon];
                return (0, n.jsx)("li", {
                  children: (0, n.jsx)("a", {
                    href: e.link,
                    target: "_blank",
                    rel: "noopener",
                    children: (0, n.jsx)(t, {})
                  })
                }, e.id)
              }))
            })]
          })
        },
        y = function(e) {
          var t = e.title,
            r = e.className;
          return (0, n.jsx)("div", {
            className: "mb-12 ".concat(null !== r && void 0 !== r ? r : ""),
            children: (0, n.jsx)("h2", {
              className: "text-3xl font-heading tracking-normal text-dark pb-4 relative before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-dark after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[255px] after:bg-dark",
              children: t
            })
          })
        },
        N = function() {
          return (0, n.jsx)("section", {
            className: "pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]",
            id: "about",
            children: (0, n.jsxs)("div", {
              className: "container",
              children: [(0, n.jsx)(y, {
                title: "About Me",
                className: "lg:hidden"
              }), (0, n.jsxs)("div", {
                className: "md:grid grid-cols-12 items-center",
                children: [(0, n.jsx)("div", {
                  className: "col-span-4 sm:text-center md:text-left",
                  children: (0, n.jsx)("div", {
                    className: "inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl",
                    children: (0, n.jsx)(s.default, {
                      width: 350,
                      height: 470,
                      className: "rounded-md",
                      src: "/images/".concat(v.Nb)
                    })
                  })
                }), (0, n.jsx)("div", {
                  className: "col-start-6 col-end-13",
                  children: (0, n.jsxs)("div", {
                    className: "bio mt-5 sm:mt-10 md:mt-0",
                    children: [(0, n.jsx)(y, {
                      title: "About Me",
                      className: "hidden lg:block"
                    }), (0, n.jsx)("div", {
                      className: "bio-text",
                      dangerouslySetInnerHTML: {
                        __html: v.A
                      }
                    }), (0, n.jsx)(w, {
                      className: "mt-10"
                    })]
                  })
                })]
              })]
            })
          })
        },
        k = r(8193),
        O = r(1649),
        S = function() {
          return (0, n.jsxs)("footer", {
            className: "bg-gray-50 pt-10 md:pt-14 lg:pt-5 pb-5 relative",
            children: [(0, n.jsx)("div", {
              className: "container",
              children: (0, n.jsxs)("div", {
                className: "text-center lg:text-left lg:flex justify-between items-center",
                children: [(0, n.jsx)(l, {
                  variant: "dark"
                }), (0, n.jsxs)("p", {
                  children: ["\portfolio ", (new Date).getFullYear(), ", Made with ", (0, n.jsx)(k.M_L, {
                    className: "inline portfolio"
                  }), " By ladex studio."]
                })]
              })
            }), (0, n.jsx)("button", {
              onClick: function() {
                return c.NY.scrollToTop()
              },
              className: "absolute left-1/2 -top-[35px] -translate-x-1/2 bg-white w-14 md:w-[70px] h-14 md:h-[70px] rounded-full text-center shadow-scroll-top",
              children: (0, n.jsx)(O.Vmf, {
                className: "inline text-2xl"
              })
            })]
          })
        },
        P = r(9889);

      function E(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          })))), n.forEach((function(t) {
            E(e, t, r[t])
          }))
        }
        return e
      }

      function A(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var F = "text-[13px] border-b-[1px] outline-none w-full border-b-neutral-200 duration-300 focus:border-b-black",
        L = function(e) {
          var t = e.className,
            r = e.multiline,
            a = A(e, ["className", "multiline"]);
          return r ? (0, n.jsx)("textarea", I({}, a, {
            className: "".concat(F, " resize-none ").concat(t)
          })) : (0, n.jsx)("input", I({}, a, {
            style: {
              outline: "none"
            },
            className: "".concat(F, " h-8 ").concat(t)
          }))
        },
        _ = r(5247),
        C = r(3990),
        M = r(5434),
        B = function(e) {
          var t = e.className,
            r = (0, a.useState)(0),
            o = r[0],
            s = r[1],
            i = (0, a.useState)(!1),
            l = i[0],
            c = i[1],
            d = (0, a.useState)(null),
            u = d[0],
            f = d[1];
          (0, a.useEffect)((function() {
            s(Math.round(11 * Math.random()))
          }), [o]);
          var m = (0, a.useRef)(null);
          return (0, n.jsxs)("form", {
            onSubmit: function(e) {
              e.preventDefault(), parseInt(u) === 11 + o ? (c(!0), _.ZP.sendForm("service_2n4p4zf", "template_zbpnzf5", m.current, "RFRWgSzPUJD8MZVMm").then((function(e) {
                P.Z.success("Thanks for Contact with me\u261d", {
                  hideAfter: 5
                }), c(!1), m.current.reset()
              }), (function(e) {
                P.Z.error(e.text, {
                  hideAfter: 5
                }), c(!1), m.current.reset(), s(Math.round(11 * Math.random()))
              }))) : P.Z.error("Addition didn't match!", {
                hideAfter: 5
              })
            },
            ref: m,
            className: null !== t && void 0 !== t ? t : "",
            children: [(0, n.jsxs)("div", {
              className: "grid md:grid-cols-2 gap-5 md:gap-7",
              children: [(0, n.jsx)(L, {
                required: !0,
                name: "name",
                placeholder: "Name Here*"
              }), (0, n.jsx)(L, {
                required: !0,
                name: "email",
                placeholder: "Email Here*"
              })]
            }), (0, n.jsx)(L, {
              rows: 4,
              required: !0,
              name: "message",
              className: "mt-5",
              multiline: !0,
              placeholder: "Message Here*"
            }), (0, n.jsxs)("div", {
              className: "flex items-center mt-5",
              children: [(0, n.jsx)("p", {
                className: "!mb-0 mr-5",
                children: "Are you human?"
              }), (0, n.jsxs)("h4", {
                children: ["11 + ", o, " = "]
              }), (0, n.jsx)("input", {
                required: !0,
                type: "text",
                onChange: function(e) {
                  return f(e.target.value)
                },
                className: "border border-neutral-200 focus:border-dark outline-0 p-2 h-8 w-16 ml-3"
              })]
            }), (0, n.jsx)("div", {
              className: "text-center md:text-right mt-5",
              children: (0, n.jsx)("button", {
                className: "bg-dark text-white text-[12px] px-6 py-3 group",
                type: "submit",
                disabled: l,
                children: l ? (0, n.jsxs)(n.Fragment, {
                  children: ["SENDING", (0, n.jsx)(C.j8h, {
                    className: "icon-spin inline text-xl ml-1 duration-400 group-hover:translate-x-2"
                  })]
                }) : (0, n.jsxs)(n.Fragment, {
                  children: ["SEND MESSAGE", (0, n.jsx)(M.sG5, {
                    className: "inline text-xl ml-1 duration-400 group-hover:translate-x-2"
                  })]
                })
              })
            })]
          })
        },
        z = function() {
          return (0, n.jsx)("section", {
            className: "py-[100px]",
            id: "contact",
            children: (0, n.jsxs)("div", {
              className: "container",
              children: [(0, n.jsx)(y, {
                title: "Get In Touch"
              }), (0, n.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-12",
                children: [(0, n.jsxs)("div", {
                  className: "col-span-5",
                  children: [(0, n.jsxs)("div", {
                    className: "font-medium space-y-2",
                    children: [(0, n.jsxs)("address", {
                      className: "not-italic",
                      children: ["3 SHITTU St, OPPOSITE SCHOOL OF HEALTH TECHNOLOGY,AKURE,", (0, n.jsx)("br", {}), "Ondo State, Nigeria"]
                    }), (0, n.jsx)("p", {
                      children: "trendsupdate247@gmail.com, victoribitoye70@gmail.com"
                    }), (0, n.jsx)("p", {
                      children: "+(234) 70-119-895-23, wa/(234) 90-139-738-14"
                    })]
                  }), (0, n.jsx)(w, {
                    className: "mt-6 md:mt-10"
                  })]
                }), (0, n.jsx)("div", {
                  className: "col-span-7 mt-10 md:mt-0",
                  children: (0, n.jsx)(B, {})
                })]
              })]
            })
          })
        },
        D = function(e) {
          var t = e.className,
            r = e.fillColor;
          return (0, n.jsx)("div", {
            className: "absolute left-0 bottom-0 w-full ".concat(null !== t && void 0 !== t ? t : ""),
            children: (0, n.jsx)("svg", {
              x: "0px",
              y: "0px",
              viewBox: "0 186.5 1920 113.5",
              fill: null !== r && void 0 !== r ? r : "#ffffff",
              children: (0, n.jsx)("polygon", {
                points: "0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
              })
            })
          })
        },
        T = function() {
          return (0, n.jsxs)("section", {
            id: "hero",
            style: {
              backgroundImage: "url(".concat("/images/hero-bg.jpg", ")")
            },
            className: "relative bg-cover bg-no-repeat bg-center-top h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center",
            children: [(0, n.jsx)("div", {
              className: "container",
              children: (0, n.jsxs)("div", {
                className: "mt-8 font-light",
                children: [(0, n.jsx)("h1", {
                  className: "text-white font-light text-3xl sm:text-[45px] md:text-[55px] leading-none",
                  children: "I'M VICTOR SEYI"
                }), (0, n.jsx)("h2", {
                  className: "text-white font-light text-md sm:text-lg tracking-4 mt-2 sm:mt-4",
                  children: "ANDROID/AI DEVELOPER | WEB DEVELOPER"
                })]
              })
            }), (0, n.jsx)(D, {
              className: "hidden md:block"
            })]
          })
        },
        V = r(5988),
        R = r.n(V);

      function H(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          })))), n.forEach((function(t) {
            H(e, t, r[t])
          }))
        }
        return e
      }

      function G(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }
      var U = function(e) {
          var t = e.src,
            r = G(e, ["src"]);
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
              className: "jsx-c1a1d72fadfeada4 w-full custom-image",
              children: (0, n.jsx)(s.default, q({
                src: t,
                layout: "fill",
                objectFit: "contain",
                className: "!w-full !relative !h-unset"
              }, r))
            }), (0, n.jsx)(R(), {
              id: "c1a1d72fadfeada4",
              children: ".custom-image>span{position:unset!important}"
            })]
          })
        },
        Z = r(5697),
        J = r.n(Z),
        W = function(e) {
          var t = e.thumb,
            r = e.title,
            a = e.desc,
            o = e.className;
          return (0, n.jsxs)("div", {
            className: "service group relative flex px-3 py-5 rounded-md duration-300 hover:bg-gray-50 ".concat(Y, " ").concat(X, " ").concat(null !== o && void 0 !== o ? o : ""),
            children: [(0, n.jsx)("div", {
              className: "mr-4 bg-white group-hover:bg-gray-50 relative flex-shrink-0 self-start w-[50px] md:w-auto",
              children: (0, n.jsx)(U, {
                src: t,
                alt: r
              })
            }), (0, n.jsxs)("div", {
              children: [(0, n.jsx)("h2", {
                className: "font-semibold text-base mb-3",
                children: r
              }), (0, n.jsx)("p", {
                children: a
              })]
            })]
          })
        },
        Y = "before:absolute before:left-10 before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300",
        X = "after:absolute after:left-9 after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300";
      W.propTypes = {
        thumb: J().string.isRequired,
        title: J().string.isRequired,
        desc: J().string.isRequired
      };
      var $ = W,
        Q = JSON.parse('[{"id":1,"title":"Android Development","desc":"Native Android apps built in Kotlin — architecture, UI, ; and shipping a stable app end-to-end, tested on real hardware","icon":"service-web-design.png"},{"id":2,"title":"Illustrator","desc":"That a brought to just try with my boss; I\'d get out the spot. But who know maybe that would be best","icon":"service-illustrator.png"},{"id":3,"title":"Branding Identity","desc":"Brought a to just try that with my boss; I\'d get kicked out on the spot. But who\'s knows maybe the better","icon":"service-branding.png"}]'),
        K = function() {
          return (0, n.jsxs)("section", {
            className: "service-area relative pb-[100px] lg:pb-[200px]",
            id: "services",
            children: [(0, n.jsx)("div", {
              className: "container md:grid md:grid-cols-3 lg:gap-7",
              children: Q.map((function(e) {
                return (0, n.jsx)($, {
                  desc: e.desc,
                  title: e.title,
                  thumb: "/images/".concat(e.icon)
                }, e.id)
              }))
            }), (0, n.jsx)(D, {
              fillColor: "#F9FAFB"
            })]
          })
        },
        ee = function(e) {
          var t = e.preloaded;
          return (0, n.jsx)("div", {
            className: "fixed flex inset-0 after:absolute after:w-1/2 after:h-full after:bg-dark after:left-0 after:top-0 before:absolute before:w-1/2 before:h-full before:bg-dark before:right-0 before:top-0 ".concat(t ? "z-10 opacity-0 pointer-events-none after:animate-preloaded before:animate-preloaded" : "z-50"),
            children: (0, n.jsx)("div", {
              className: "w-[1px] h-[250px] m-auto relative z-50 overflow-hidden duration-300 after:absolute after:w-full after:h-full after:bg-[#777] after:left-0 after:top-0 after:animate-lineround before:absolute before:w-full before:h-0 before:bg-white before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-lineheight ".concat(t ? "!h-full opacity-0 pointer-events-none after:opacity-0" : "")
            })
          })
        },
        te = r(5152),
        re = r(4578);
      var ne = (0, te.default)((function() {
          return r.e(239).then(r.bind(r, 1239))
        }), {
          loadableGenerated: {
            webpack: function() {
              return [1239]
            }
          },
          ssr: !1
        }),
        ae = "after:absolute after:bg-black after:inset-0 after:opacity-0 after:duration-400 hover:after:opacity-30",
        oe = function(e) {
          var t, r, s = e.title,
            i = e.thumb,
            l = e.featuredVideo,
            c = e.videoLink,
            d = (0, a.useState)(!1),
            u = d[0],
            f = d[1];
          return l && ("youtube" === (t = function(e) {
            for (var t, r = e.replace(/^https?:\/\//, ""), n = r.length - 1; n >= 0; n--)
              if ("." === r[n]) {
                t = r.substr(0, n);
                break
              } return t.substring(t.lastIndexOf(".") + 1)
          }(c)) && (r = function(e) {
            var t = e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
            return !(!t || 11 !== t[7].length) && t[7]
          }(c)), "vimeo" === t && (r = function(e) {
            var t = e.match(/http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/);
            if (t) return t[2];
            console.log("not a vimeo url")
          }(c))), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("div", {
              className: "relative duration-400 rounded-md overflow-hidden hover:drop-shadow-portfolio ".concat(l ? ae : ""),
              children: [(0, n.jsx)(o.default, {
                href: "/",
                children: (0, n.jsx)("a", {
                  children: (0, n.jsx)(U, {
                    src: i,
                    alt: s
                  })
                })
              }), l && (0, n.jsx)("button", {
                className: "absolute inset-0 text-6xl text-white w-full z-10",
                onClick: function() {
                  return f(!0)
                },
                children: (0, n.jsx)(re.UFz, {
                  className: "inline"
                })
              })]
            }), l && (0, n.jsx)(ne, {
              autoplay: !0,
              isOpen: u,
              channel: t,
              videoId: r,
              onClose: function() {
                return f(!1)
              }
            })]
          })
        },
        se = JSON.parse('[{"id":1,"title":"Portfolio 1","categories":["marketing"],"thumb":"01.jpg","featuredVideo":true,"videoLink":"https://www.youtube.com/watch?v=Hl3ZnQp4_S0"},{"id":2,"title":"Portfolio 2","categories":["web","marketing"],"thumb":"02.jpg","featuredVideo":false,"videoLink":null},{"id":3,"title":"Portfolio 3","categories":["graphics","web","marketing"],"thumb":"03.jpg","featuredVideo":false,"videoLink":null},{"id":4,"title":"Portfolio 4","categories":["marketing","graphics"],"thumb":"04.jpg","featuredVideo":false,"videoLink":null},{"id":5,"title":"Portfolio 5","categories":["web"],"thumb":"05.jpg","featuredVideo":false,"videoLink":null},{"id":6,"title":"Portfolio 6","categories":["graphics"],"thumb":"06.jpg","featuredVideo":false,"videoLink":null}]');

      function ie(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function le(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function ce(e) {
        return function(e) {
          if (Array.isArray(e)) return ie(e)
        }(e) || function(e) {
          if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
          if (!e) return;
          if ("string" === typeof e) return ie(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(r);
          if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ie(e, t)
        }(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var de = "text-black capitalize font-medium relative",
        ue = "after:absolute after:h-[6px] after:w-[6px] after:rounded-full after:bg-slate-700 after:left-1/2 after:-translate-x-1/2 after:-bottom-1",
        fe = function() {
          var e = (0, a.useState)([]),
            t = e[0],
            r = e[1],
            o = (0, a.useState)("*"),
            s = o[0],
            i = o[1],
            l = (0, a.useState)(ce(se)),
            c = l[0],
            d = l[1],
            u = function(e) {
              var t = e.target.dataset.filter;
              i(t);
              var r = se.map((function(e) {
                return function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                      n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                      return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                      le(e, t, r[t])
                    }))
                  }
                  return e
                }({}, e, {
                  category: e.categories.find((function(e) {
                    return e === t
                  }))
                })
              })).filter((function(e) {
                return e.category === t
              }));
              d("*" === t ? se : r)
            };
          return (0, a.useEffect)((function() {
            var e = se.map((function(e) {
                return e.categories
              })),
              t = ce(new Set(e.flat()));
            r(t)
          }), []), (0, n.jsxs)("section", {
            className: "bg-gray-50 relative pt-[100px] pb-[100px] lg:pb-[200px]",
            id: "portfolio",
            children: [(0, n.jsxs)("div", {
              className: "container",
              children: [(0, n.jsx)(y, {
                title: "Portfolios"
              }), (0, n.jsxs)("nav", {
                className: "mb-10 space-x-5",
                children: [(0, n.jsx)("button", {
                  "data-filter": "*",
                  onClick: function(e) {
                    return u(e)
                  },
                  className: "".concat(de, " ").concat("*" === s ? ue : ""),
                  children: "All"
                }), t.map((function(e) {
                  return (0, n.jsx)("button", {
                    "data-filter": e,
                    onClick: function(e) {
                      return u(e)
                    },
                    className: "".concat(de, " ").concat(s === e ? ue : ""),
                    children: e
                  }, e)
                }))]
              }), (0, n.jsx)("div", {
                className: "grid sm:grid-cols-2 md:grid-cols-3 gap-7",
                children: c.map((function(e) {
                  return (0, n.jsx)(oe, {
                    title: e.title,
                    videoLink: e.videoLink,
                    featuredVideo: e.featuredVideo,
                    thumb: "/images/portfolio/".concat(e.thumb)
                  }, e.id)
                }))
              })]
            }), (0, n.jsx)(D, {})]
          })
        },
        me = function() {
          var e = (0, a.useState)(!1),
            t = e[0],
            r = e[1];
          return (0, a.useEffect)((function() {
            setTimeout((function() {
              r(!0)
            }), 800)
          }), []), (0, n.jsxs)("div", {
            className: "rokstar",
            children: [(0, n.jsx)(ee, {
              preloaded: t
            }), (0, n.jsx)(g, {}), (0, n.jsx)(T, {}), (0, n.jsx)(N, {}), (0, n.jsx)(K, {}), (0, n.jsx)(z, {}), (0, n.jsx)(S, {})]
          })
        }
    }
  },
  function(e) {
    e.O(0, [774, 876, 228, 866, 609, 445, 617, 490, 888, 179], (function() {
      return t = 3685, e(e.s = t);
      var t
    }));
    var t = e.O();
    _N_E = t
  }
]);