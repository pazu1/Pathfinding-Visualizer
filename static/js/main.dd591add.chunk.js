(this.webpackJsonppathfinding = this.webpackJsonppathfinding || []).push([
    [0],
    {
        38: function (e, t, a) {
            e.exports = a(57);
        },
        43: function (e, t, a) {},
        57: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                i = a.n(n),
                r = a(24),
                l = a.n(r),
                o = (a(43), a(11)),
                s = a(7),
                c = a.n(s),
                u = a(14),
                h = a(2),
                d = a(6),
                m = a(1),
                p = a(4),
                f = a(3),
                g = (a(45), a(16)),
                b = a.n(g),
                v = a(17),
                y = a.n(v),
                E = a(27),
                S = a.n(E),
                x = a(28),
                k = a.n(x),
                w = a(29),
                z = a.n(w),
                C = a(18),
                O = a.n(C),
                j = a(30),
                A = a.n(j),
                B = a(31),
                N = a.n(B),
                M = a(32),
                I = a.n(M);
            function F(e) {
                return new Promise(function (t) {
                    return setTimeout(t, e);
                });
            }
            function D(e, t) {
                var a =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                (t.current.style.background = e.background),
                    (t.current.style.transform = e.transform),
                    a && a(t);
            }
            function T(e, t) {
                return R.apply(this, arguments);
            }
            function R() {
                return (R = Object(u.a)(
                    c.a.mark(function e(t, a) {
                        var n;
                        return c.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        n = 0;
                                    case 1:
                                        if (!(n < t.length)) {
                                            e.next = 7;
                                            break;
                                        }
                                        return (e.next = 4), a(t[n], n, t);
                                    case 4:
                                        n++, (e.next = 1);
                                        break;
                                    case 7:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            var G = "https://github.com/pazu1/Pathfinding-Visualizer",
                V = [
                    i.a.createElement(
                        "div",
                        null,
                        i.a.createElement("h2", null, "How to use"),
                        i.a.createElement(
                            "p",
                            null,
                            "Select an algorithm from the button on the top left of the page.",
                            i.a.createElement("br", null),
                            "From the Items-menu select a",
                            " ",
                            i.a.createElement(
                                "span",
                                { style: { color: "#36bf00" } },
                                "start"
                            ),
                            " and an",
                            " ",
                            i.a.createElement(
                                "span",
                                { style: { color: "#a200ff" } },
                                "end"
                            ),
                            " node and place them in the grid.",
                            i.a.createElement("br", null),
                            " Draw walls from the same menu or click the 'Generate maze'-button to create a maze.",
                            i.a.createElement("br", null),
                            "Click 'Run!' to run the visualization. The selected algorithm will then try to find a path between",
                            " ",
                            i.a.createElement(
                                "span",
                                { style: { color: "#36bf00" } },
                                "start"
                            ),
                            " and",
                            " ",
                            i.a.createElement(
                                "span",
                                { style: { color: "#a200ff" } },
                                "end"
                            ),
                            ". ",
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            i.a.createElement(
                                "span",
                                { style: { color: "#29ba91" } },
                                "Visited"
                            ),
                            " nodes nodes are marked in cyan. They are parts of the grid that the algorithm had to take into account in order to find the final path.",
                            i.a.createElement("br", null),
                            "When an algorithm performs efficiently there usually aren't too many of these and the path is found quickly.",
                            i.a.createElement("br", null),
                            "For more information about the algorithms used see the 'Algorithms'-tab.",
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            "If a ",
                            i.a.createElement(
                                "span",
                                { style: { color: "#f05e54" } },
                                "path"
                            ),
                            " is found it will be marked on the grid with red.",
                            i.a.createElement("br", null),
                            i.a.createElement("br", null)
                        )
                    ),
                    i.a.createElement(
                        "div",
                        null,
                        i.a.createElement("h2", null, "Algorithms"),
                        i.a.createElement(
                            "p",
                            null,
                            "There are four pathfinding algorithms to choose from",
                            i.a.createElement(
                                "ul",
                                null,
                                i.a.createElement(
                                    "li",
                                    null,
                                    "Breadth First Search"
                                ),
                                i.a.createElement(
                                    "li",
                                    null,
                                    "Depth First Search"
                                ),
                                i.a.createElement("li", null, "A*"),
                                i.a.createElement(
                                    "li",
                                    null,
                                    "Greedy Best First Search"
                                )
                            )
                        ),
                        i.a.createElement("h2", null, "Breadth First Search"),
                        i.a.createElement(
                            "p",
                            null,
                            "Breadth First Search (BFS) is a simple pathfinding algorithm. It is always guaranteed to find the shortest path. Because there are no weights in the grid in this application this algorithm behaves the exact same as Dijkstra's algorithm would."
                        ),
                        i.a.createElement("h2", null, "Depth First Search"),
                        i.a.createElement(
                            "p",
                            null,
                            "Depth First Search (DFS) is an equally simple algorithm. The algorithm travels as far (deep) as possible in the graph before returning to unvisited nodes. For this reason it is in most cases not very efficient in finding a path. Depth First Search has many applications in solving other pathfinding related problems, such as finding paths with cycles.",
                            i.a.createElement("br", null),
                            "Depth First Search is not guaranteed to find the shortest path."
                        ),
                        i.a.createElement("h2", null, "A*"),
                        i.a.createElement(
                            "p",
                            null,
                            "A* is a more complex pathfinding algorithm and considered to be one of the most efficient. It uses a heuristic guess to reduce the amount of time having to explore parts of the graph that are unlikely to lead to a good path. In terms of time complexity it is always at least as fast as Dijkstra's algorithm, usually much faster.",
                            i.a.createElement("br", null),
                            "A* is always guaranteed to find the shortest path."
                        ),
                        i.a.createElement(
                            "h2",
                            null,
                            "Greedy Best First Search"
                        ),
                        i.a.createElement(
                            "p",
                            null,
                            "This algorithm is almost the exact same as A*, but it uses a more greedy/aggressive heuristic guess, often leading it too far down the graph too fast but as a result sometimes finding a path more quickly than A* would.",
                            i.a.createElement("br", null),
                            "The tradeoff is that it is not guaranteed to find the shortest path."
                        ),
                        i.a.createElement(
                            "h2",
                            null,
                            "About the implementation"
                        ),
                        i.a.createElement(
                            "p",
                            null,
                            "This application uses a Manhattan distance heuristic, because it makes more sense for grid-based pathfinding in my opinion, as opposed to Pythagorean.",
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            "The grid is basically an unweighted graph, meaning that the weight (or distance) between two adjacent nodes is the same everywhere, for which reason the algorithms are equivalent to their unweighted versions. This is why there is no option for Dijkstra's algorithm, as it would behave the exact same as Breadth First Search in this instance.",
                            i.a.createElement("br", null),
                            i.a.createElement("br", null),
                            "Maze generation is done using a randomized version of Prim's algorithm."
                        )
                    ),
                    i.a.createElement(
                        "div",
                        { style: { textAlign: "center" } },
                        i.a.createElement("br", null),
                        i.a.createElement("br", null),
                        i.a.createElement("br", null),
                        i.a.createElement(
                            "a",
                            {
                                href: G,
                                onClick: function () {
                                    return (e = G), void window.open(e);
                                    var e;
                                },
                                style: {
                                    color: "#000",
                                    textDecoration: "none",
                                },
                            },
                            i.a.createElement(
                                "p",
                                null,
                                "View project on GitHub:"
                            ),
                            i.a.createElement(I.a, { fontSize: "4rem" })
                        )
                    ),
                ],
                P = a(5);
            var H = function (e) {
                    function t(t) {
                        t.preventDefault(),
                            t.target === t.currentTarget && e.onClickOutside();
                    }
                    var a = e.children;
                    return Object(P.d)(e.display, null, {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                    }).map(function (e) {
                        var n = e.item,
                            r = e.key,
                            l = e.props;
                        return (
                            n &&
                            i.a.createElement(
                                P.a.div,
                                {
                                    className: "modalBg",
                                    key: r,
                                    style: l,
                                    onClick: t,
                                },
                                a
                            )
                        );
                    });
                },
                W = a(13);
            var q = function (e) {
                    var t = { flexGrow: 1 },
                        a = { flexGrow: 1.5 },
                        r = Object(n.useState)(0),
                        l = Object(W.a)(r, 2),
                        o = l[0],
                        s = l[1],
                        c = e.titles.map(function (e, n) {
                            return i.a.createElement(
                                "button",
                                {
                                    className:
                                        n === o
                                            ? "tabButton-selected"
                                            : "tabButton",
                                    style: n === o ? a : t,
                                    onClick: function () {
                                        return s(n);
                                    },
                                },
                                e
                            );
                        });
                    return i.a.createElement(
                        "div",
                        { className: "tabbedMenuContainer" },
                        i.a.createElement(
                            "div",
                            { className: "tabbedTitleBar" },
                            c
                        ),
                        i.a.createElement(
                            "div",
                            { className: "tabbedMenuContent" },
                            e.pages[o]
                        )
                    );
                },
                L = i.a.createContext(),
                J = (function (e) {
                    Object(p.a)(a, e);
                    var t = Object(f.a)(a);
                    function a(e) {
                        var n;
                        return (
                            Object(h.a)(this, a),
                            ((n = t.call(this)).setMobile = function (e) {
                                n.setState({ mobile: e });
                            }),
                            (n.state = { mobile: !1 }),
                            (n.onResize = n.onResize.bind(Object(m.a)(n))),
                            n
                        );
                    }
                    return (
                        Object(d.a)(a, [
                            {
                                key: "onResize",
                                value: function () {
                                    var e = this;
                                    window.requestAnimationFrame(function () {
                                        e.setState(function () {
                                            var e = window.innerWidth;
                                            return {
                                                width: e,
                                                mobile: e < 800,
                                            };
                                        });
                                    });
                                },
                            },
                            {
                                key: "componentWillMount",
                                value: function () {
                                    this.setState({
                                        width: window.innerWidth,
                                        mobile: window.innerWidth < 800,
                                    });
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    window.addEventListener(
                                        "resize",
                                        this.onResize
                                    );
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    window.removeEventListener(
                                        "resize",
                                        this.onResize
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.mobile,
                                        t = this.setMobile;
                                    return i.a.createElement(
                                        L.Provider,
                                        { value: { mobile: e, setMobile: t } },
                                        this.props.children
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(i.a.Component),
                U = L,
                Y = a(33),
                K = a.n(Y),
                Q = a(34),
                X = a.n(Q),
                Z = [
                    {
                        background: "#eee",
                        color: "#000",
                        transform: "scale(1.0)",
                    },
                    {
                        background: "#000",
                        color: "#000",
                        transform: "scale(1.0)",
                    },
                    { background: "#36bf00", transform: "scale(0.7)" },
                    { background: "#a200ff", transform: "scale(0.7)" },
                    { background: "#38ffc7", transform: "scale(0.2)" },
                    { background: "#f05e54", transform: "scale(1.0)" },
                    { background: "#38ffc7", transform: "scale(1.0)" },
                ],
                $ = 1,
                _ = 2,
                ee = 3,
                te = 4,
                ae = 0,
                ne = 1,
                ie = 2,
                re = 3,
                le = 4,
                oe = 5,
                se = 0,
                ce = 1,
                ue = 2,
                he = "Please add a start node.",
                de = "Please add an end node.",
                me = [
                    [-1, 0],
                    [0, 1],
                    [1, 0],
                    [0, -1],
                ];
            var pe = function (e) {
                    var t = e.mobile,
                        a = e.hide,
                        n = e.children,
                        r = Object(P.c)({
                            height: a ? 0 : 280,
                            opacity: a ? 0 : 1,
                            config: function (e) {
                                return "height" === e ? P.b.wobbly : P.b.stiff;
                            },
                        }),
                        l = { height: r.height, opacity: r.opacity };
                    return i.a.createElement(
                        P.a.div,
                        {
                            className: t ? "topBarMobile" : "topBar",
                            style: t ? l : null,
                        },
                        i.a.createElement(
                            "div",
                            { style: t ? { display: "none" } : null },
                            i.a.createElement("label", null, "Algorithm: "),
                            i.a.createElement(
                                "select",
                                {
                                    name: "algorithms",
                                    id: "algorithms",
                                    onChange: e.changeSelectedAlgorithm,
                                    disabled: e.visualizationState !== se,
                                },
                                i.a.createElement("option", { value: $ }, "A*"),
                                i.a.createElement(
                                    "option",
                                    { value: _ },
                                    "BFS"
                                ),
                                i.a.createElement(
                                    "option",
                                    { value: ee },
                                    "DFS"
                                ),
                                i.a.createElement(
                                    "option",
                                    { value: te },
                                    "Greedy BFS"
                                )
                            )
                        ),
                        i.a.createElement("br", null),
                        i.a.createElement(
                            "div",
                            { className: "sliderContainer" },
                            i.a.createElement(
                                "label",
                                null,
                                "Visualization speed:"
                            ),
                            i.a.createElement(K.a, {
                                min: 10,
                                max: 100,
                                value: e.visualizationSpeed,
                                onChange: function (t) {
                                    return e.changeVisSpeed(t.target.value);
                                },
                            })
                        ),
                        i.a.createElement("br", null),
                        i.a.createElement(
                            "button",
                            {
                                type: "button",
                                className: "settingsButton",
                                disabled: e.visualizationState === ce,
                                onClick: function () {
                                    return e.onMazeClick();
                                },
                            },
                            "Generate maze"
                        ),
                        i.a.createElement("br", null),
                        i.a.createElement(
                            "button",
                            {
                                type: "button",
                                className: "resetButton",
                                disabled: e.visualizationState === ce,
                                onClick: function () {
                                    return e.onResetClick(!0);
                                },
                            },
                            i.a.createElement(X.a, {
                                fontSize: "17px",
                                className: "ionIcon",
                                color:
                                    e.visualizationState === ce ? "#666" : null,
                            }),
                            "Reset grid"
                        ),
                        i.a.createElement("br", null),
                        i.a.createElement(
                            "button",
                            {
                                style: t ? { display: "none" } : null,
                                type: "button",
                                className: "settingsButton",
                                onClick: e.onClick,
                            },
                            e.runButtonIcon,
                            e.runButtonText
                        ),
                        n
                    );
                },
                fe = (function (e) {
                    Object(p.a)(a, e);
                    var t = Object(f.a)(a);
                    function a(e) {
                        var n;
                        return (
                            Object(h.a)(this, a),
                            ((n = t.call(this, e)).state = {
                                expanded: !0,
                                showHelp: !1,
                            }),
                            n
                        );
                    }
                    return (
                        Object(d.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.context.mobile,
                                        a = "Run! ",
                                        n = i.a.createElement(z.a, {
                                            fontSize: "17px",
                                            className: "ionIcon",
                                        });
                                    this.props.visualizationState === ce
                                        ? ((a = "Skip visualization"),
                                          (n = i.a.createElement(S.a, {
                                              fontSize: "17px",
                                              className: "ionIcon",
                                          })))
                                        : this.props.visualizationState ===
                                              ue &&
                                          ((a = "Clear path"),
                                          (n = i.a.createElement(k.a, {
                                              fontSize: "17px",
                                              className: "ionIcon",
                                          })));
                                    var r = i.a.createElement(y.a, {
                                        fontSize: "25px",
                                        className: "ionDropdown",
                                    });
                                    return (
                                        this.state.expanded ||
                                            (r = i.a.createElement(b.a, {
                                                fontSize: "25px",
                                                className: "ionDropdown",
                                            })),
                                        i.a.createElement(
                                            i.a.Fragment,
                                            null,
                                            i.a.createElement(
                                                H,
                                                {
                                                    display: this.state
                                                        .showHelp,
                                                    onClickOutside: function () {
                                                        return e.setState({
                                                            showHelp: !1,
                                                        });
                                                    },
                                                },
                                                i.a.createElement(q, {
                                                    titles: [
                                                        i.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "centeredSpan",
                                                            },
                                                            i.a.createElement(
                                                                O.a,
                                                                {
                                                                    fontSize:
                                                                        "17px",
                                                                    className:
                                                                        "ionIcon",
                                                                }
                                                            ),
                                                            "Help"
                                                        ),
                                                        i.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "centeredSpan",
                                                            },
                                                            i.a.createElement(
                                                                A.a,
                                                                {
                                                                    fontSize:
                                                                        "17px",
                                                                    className:
                                                                        "ionIcon",
                                                                }
                                                            ),
                                                            "Algorithms"
                                                        ),
                                                        i.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "centeredSpan",
                                                            },
                                                            i.a.createElement(
                                                                N.a,
                                                                {
                                                                    fontSize:
                                                                        "17px",
                                                                    className:
                                                                        "ionIcon",
                                                                }
                                                            ),
                                                            "About"
                                                        ),
                                                    ],
                                                    pages: V,
                                                })
                                            ),
                                            i.a.createElement(
                                                "button",
                                                {
                                                    style: {
                                                        position: "fixed",
                                                        left: 0,
                                                        bottom: 0,
                                                        zIndex: 12,
                                                        display: t
                                                            ? "none"
                                                            : null,
                                                    },
                                                    onClick: function () {
                                                        return e.setState({
                                                            showHelp: !0,
                                                        });
                                                    },
                                                    className: "settingsButton",
                                                    type: "button",
                                                },
                                                i.a.createElement(O.a, {
                                                    fontSize: "17px",
                                                    className: "ionIcon",
                                                }),
                                                "Help"
                                            ),
                                            i.a.createElement(
                                                "div",
                                                {
                                                    className: t
                                                        ? "topBarContainer"
                                                        : null,
                                                },
                                                i.a.createElement(
                                                    "button",
                                                    {
                                                        className:
                                                            "topBarToggle",
                                                        style: t
                                                            ? null
                                                            : {
                                                                  display:
                                                                      "none",
                                                              },
                                                        onClick: function () {
                                                            return e.setState(
                                                                function (e) {
                                                                    return {
                                                                        expanded: !e.expanded,
                                                                    };
                                                                }
                                                            );
                                                        },
                                                    },
                                                    "Options",
                                                    r
                                                ),
                                                i.a.createElement(
                                                    pe,
                                                    {
                                                        hide: !this.state
                                                            .expanded,
                                                        mobile: t,
                                                        changeSelectedAlgorithm: this
                                                            .props
                                                            .changeSelectedAlgorithm,
                                                        visualizationState: this
                                                            .props
                                                            .visualizationState,
                                                        onClick: this.props
                                                            .onClick,
                                                        changeVisSpeed: this
                                                            .props
                                                            .changeVisSpeed,
                                                        visualizationSpeed: this
                                                            .props
                                                            .visualizationSpeed,
                                                        runButtonText: a,
                                                        runButtonIcon: n,
                                                        onMazeClick: this.props
                                                            .onMazeClick,
                                                        onResetClick: this.props
                                                            .onResetClick,
                                                    },
                                                    i.a.createElement(
                                                        "button",
                                                        {
                                                            style: t
                                                                ? null
                                                                : {
                                                                      display:
                                                                          "none",
                                                                  },
                                                            onClick: function () {
                                                                return e.setState(
                                                                    {
                                                                        showHelp: !0,
                                                                    }
                                                                );
                                                            },
                                                            className:
                                                                "settingsButton",
                                                            type: "button",
                                                        },
                                                        i.a.createElement(O.a, {
                                                            fontSize: "17px",
                                                            className:
                                                                "ionIcon",
                                                        }),
                                                        "Help"
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "mobileActionBar",
                                                        style: t
                                                            ? null
                                                            : {
                                                                  display:
                                                                      "none",
                                                              },
                                                    },
                                                    i.a.createElement(
                                                        "div",
                                                        null,
                                                        i.a.createElement(
                                                            "label",
                                                            {
                                                                style: {
                                                                    textShadow:
                                                                        "2px 2px 8px #000000",
                                                                },
                                                            },
                                                            "Algorithm:"
                                                        ),
                                                        i.a.createElement(
                                                            "select",
                                                            {
                                                                name:
                                                                    "algorithms",
                                                                id:
                                                                    "algorithms",
                                                                onChange: this
                                                                    .props
                                                                    .changeSelectedAlgorithm,
                                                                disabled:
                                                                    this.props
                                                                        .visualizationState !==
                                                                    se,
                                                            },
                                                            i.a.createElement(
                                                                "option",
                                                                { value: $ },
                                                                "A*"
                                                            ),
                                                            i.a.createElement(
                                                                "option",
                                                                { value: _ },
                                                                "BFS"
                                                            ),
                                                            i.a.createElement(
                                                                "option",
                                                                { value: ee },
                                                                "DFS"
                                                            ),
                                                            i.a.createElement(
                                                                "option",
                                                                { value: te },
                                                                "Greedy BFS"
                                                            )
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "button",
                                                        {
                                                            className:
                                                                "settingsButton",
                                                            style: t
                                                                ? null
                                                                : {
                                                                      display:
                                                                          "none",
                                                                  },
                                                            type: "button",
                                                            onClick: this.props
                                                                .onClick,
                                                        },
                                                        n,
                                                        a
                                                    )
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(i.a.Component);
            fe.contextType = U;
            var ge = fe;
            var be = function (e) {
                    var t = Object(n.useState)(),
                        a = Object(W.a)(t, 2)[1],
                        r = function () {
                            a({});
                        },
                        l = Object(n.useRef)();
                    return (
                        (e.cell.ref = l),
                        i.a.createElement(
                            "button",
                            {
                                ref: l,
                                type: "button",
                                className: "gridButton",
                                onMouseDown: function () {
                                    e.disableDrawing ||
                                        (e.clickFunction(e.x, e.y), r());
                                },
                                onMouseOver: function () {
                                    e.drawing &&
                                        !e.disableDrawing &&
                                        (e.clickFunction(e.x, e.y), r());
                                },
                            },
                            "\u200e"
                        )
                    );
                },
                ve = (function (e) {
                    Object(p.a)(a, e);
                    var t = Object(f.a)(a);
                    function a() {
                        var e;
                        return (
                            Object(h.a)(this, a),
                            ((e = t.call(this)).state = {
                                drawing: !1,
                                runningAlgorithm: !1,
                            }),
                            e
                        );
                    }
                    return (
                        Object(d.a)(a, [
                            {
                                key: "handleMouse",
                                value: function (e, t) {
                                    this.setState({ drawing: t });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = -1,
                                        a = this.props.grid.map(function (a) {
                                            var n = -1;
                                            t++;
                                            var r = a.map(function (a) {
                                                return (
                                                    n++,
                                                    i.a.createElement(
                                                        "td",
                                                        { key: n },
                                                        i.a.createElement(be, {
                                                            cell:
                                                                e.props.grid[t][
                                                                    n
                                                                ],
                                                            x: n,
                                                            y: t,
                                                            clickFunction:
                                                                e.props
                                                                    .updateCell,
                                                            drawing:
                                                                e.state.drawing,
                                                            disableDrawing:
                                                                e.props
                                                                    .disableDrawing,
                                                        })
                                                    )
                                                );
                                            });
                                            return i.a.createElement(
                                                "tr",
                                                { key: t },
                                                r
                                            );
                                        });
                                    return i.a.createElement(
                                        "table",
                                        {
                                            className: "gridBase",
                                            onMouseDown: function (t) {
                                                e.handleMouse(t, !0);
                                            },
                                            onMouseLeave: function (t) {
                                                return e.handleMouse(t, !1);
                                            },
                                            onMouseUp: function (t) {
                                                return e.handleMouse(t, !1);
                                            },
                                        },
                                        i.a.createElement("tbody", null, a)
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(i.a.Component),
                ye = a(35);
            var Ee = function (e) {
                var t = { display: "table-row" };
                return (
                    e.disabled &&
                        ((t.boxShadow = "none"),
                        (t.border = "2px solid transparent")),
                    i.a.createElement(
                        ye.a,
                        {
                            className: "tooltip",
                            trigger: i.a.createElement(
                                "button",
                                {
                                    className: "itemBarBtn",
                                    style: t,
                                    onClick: e.onClick,
                                },
                                i.a.createElement(
                                    "span",
                                    { style: { color: e.color } },
                                    "\u25a0 "
                                ),
                                e.text
                                    ? i.a.createElement(
                                          "p",
                                          { id: "itemBarText" },
                                          e.text
                                      )
                                    : "item"
                            ),
                            position: "right center",
                            closeOnDocumentClick: !0,
                            open: e.showTip,
                            on: "none",
                            onClose: e.onTipClosed,
                        },
                        e.tipText
                    )
                );
            };
            var Se = function (e) {
                var t = Object(n.useState)(!0),
                    a = Object(W.a)(t, 2),
                    r = a[0],
                    l = a[1],
                    o = !r || e.hidden,
                    s = i.a.createElement(y.a, {
                        fontSize: "25px",
                        className: "ionDropdown",
                    });
                o &&
                    (s = i.a.createElement(b.a, {
                        fontSize: "25px",
                        className: "ionDropdown",
                    }));
                var c = Object(P.c)({
                        height: o ? 0 : 330,
                        opacity: o ? 0 : 1,
                        config: function (e) {
                            return "height" === e ? P.b.wobbly : P.b.stiff;
                        },
                    }),
                    u = { height: c.height, opacity: c.opacity };
                return i.a.createElement(
                    "div",
                    { className: "itemBarContainer" },
                    i.a.createElement(
                        "button",
                        {
                            className: "itemBarToggle",
                            onClick: function () {
                                e.hidden || l(!r);
                            },
                        },
                        "Items",
                        s
                    ),
                    i.a.createElement(
                        P.a.div,
                        { className: "itemBar", style: u },
                        i.a.createElement(Ee, {
                            text: "Start node",
                            color: "#36bf00",
                            disabled: e.selectedItem !== ie,
                            onClick: function () {
                                e.changeSelectedItem(ie);
                            },
                            showTip: e.activeAlert === he,
                            tipText: e.activeAlert,
                            onTipClosed: e.removeAlert,
                        }),
                        i.a.createElement(Ee, {
                            text: "End node",
                            color: "#a200ff",
                            disabled: e.selectedItem !== re,
                            onClick: function () {
                                e.changeSelectedItem(re);
                            },
                            showTip: e.activeAlert === de,
                            tipText: e.activeAlert,
                            onTipClosed: e.removeAlert,
                        }),
                        i.a.createElement(Ee, {
                            text: "Wall",
                            color: "#000",
                            disabled: e.selectedItem !== ne,
                            onClick: function () {
                                return e.changeSelectedItem(ne);
                            },
                        }),
                        i.a.createElement(Ee, {
                            text: "Eraser",
                            color: "#fff",
                            disabled: e.selectedItem !== ae,
                            onClick: function () {
                                return e.changeSelectedItem(ae);
                            },
                        })
                    )
                );
            };
            var xe = function (e) {
                    var t = 30;
                    Object(n.useContext)(U).mobile && (t = 90);
                    var a = Object(P.c)({
                            height: e.active ? 50 : 0,
                            opacity: e.active ? 1 : 0,
                            bottom: e.active ? t : 0,
                        }),
                        r = (function (e) {
                            var t = Object(n.useRef)();
                            return (
                                Object(n.useEffect)(function () {
                                    t.current = e;
                                }),
                                t.current
                            );
                        })(e.isAlert),
                        l = {
                            height: a.height,
                            opacity: a.opacity,
                            background: e.isAlert && r ? "#f05e54" : null,
                            bottom: a.bottom,
                        };
                    return i.a.createElement(
                        P.a.div,
                        { className: "notification", style: l },
                        i.a.createElement("p", null, e.active ? e.text : null)
                    );
                },
                ke = (function (e) {
                    Object(p.a)(a, e);
                    var t = Object(f.a)(a);
                    function a() {
                        var e;
                        return (
                            Object(h.a)(this, a),
                            ((e = t.call(this)).grid = []),
                            (e.start = null),
                            (e.end = null),
                            (e.route = []),
                            (e.state = {
                                algorithm: $,
                                item: ie,
                                activeAlert: null,
                                visualizationState: se,
                                visualizationSpeed: 90,
                            }),
                            (e.drawOnGrid = e.drawOnGrid.bind(Object(m.a)(e))),
                            (e.changeAlgorithm = e.changeAlgorithm.bind(
                                Object(m.a)(e)
                            )),
                            (e.changeItem = e.changeItem.bind(Object(m.a)(e))),
                            (e.onRunButtonClick = e.onRunButtonClick.bind(
                                Object(m.a)(e)
                            )),
                            (e.updateRoute = e.updateRoute.bind(
                                Object(m.a)(e)
                            )),
                            (e.clearVisualization = e.clearVisualization.bind(
                                Object(m.a)(e)
                            )),
                            (e.removeAlert = e.removeAlert.bind(
                                Object(m.a)(e)
                            )),
                            (e.changeVisSpeed = e.changeVisSpeed.bind(
                                Object(m.a)(e)
                            )),
                            (e.createGrid = e.createGrid.bind(Object(m.a)(e))),
                            (e.generateMazeSimple = e.generateMazeSimple.bind(
                                Object(m.a)(e)
                            )),
                            (e.algFunctions = {
                                1: function (t, a) {
                                    return e.findPath(t, a, $);
                                },
                                2: function (t, a) {
                                    return e.findPath(t, a, _);
                                },
                                3: function (t, a) {
                                    return e.findPath(t, a, ee);
                                },
                                4: function (t, a) {
                                    return e.findPath(t, a, te);
                                },
                            }),
                            e
                        );
                    }
                    return (
                        Object(d.a)(a, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.createGrid();
                                },
                            },
                            {
                                key: "createGrid",
                                value: function () {
                                    for (
                                        var e = Math.floor(
                                                (0.7 * window.innerHeight) / 20
                                            ),
                                            t = Math.floor(
                                                (0.65 * window.innerWidth) / 20
                                            ),
                                            a = [],
                                            n = 0;
                                        n < e;
                                        n++
                                    ) {
                                        a.push([]);
                                        for (var i = 0; i < t; i++)
                                            a[n].push({
                                                type: ae,
                                                x: i,
                                                y: n,
                                                ref: null,
                                            });
                                    }
                                    (this.grid = a), this.setState({});
                                },
                            },
                            {
                                key: "changeItem",
                                value: function (e) {
                                    this.setState({ item: e });
                                },
                            },
                            {
                                key: "changeAlgorithm",
                                value: function (e) {
                                    this.setState({
                                        algorithm: parseInt(e.target.value),
                                    });
                                },
                            },
                            {
                                key: "removeAlert",
                                value: function () {
                                    this.setState({ activeAlert: null });
                                },
                            },
                            {
                                key: "changeVisSpeed",
                                value: function (e) {
                                    this.setState({ visualizationSpeed: e });
                                },
                            },
                            {
                                key: "onRunButtonClick",
                                value: function () {
                                    var e = this,
                                        t = this.start,
                                        a = this.end;
                                    null !== t
                                        ? null !== a
                                            ? this.state.visualizationState ===
                                              ce
                                                ? this.setState({
                                                      visualizationState: ue,
                                                  })
                                                : this.state
                                                      .visualizationState === ue
                                                ? this.clearVisualization()
                                                : this.setState(
                                                      {
                                                          start: t,
                                                          end: a,
                                                          visualizationState: ce,
                                                      },
                                                      function () {
                                                          return e.algFunctions[
                                                              e.state.algorithm
                                                          ](
                                                              e.grid[t.y][t.x],
                                                              e.grid[a.y][a.x]
                                                          );
                                                      }
                                                  )
                                            : this.setState({ activeAlert: de })
                                        : this.setState({ activeAlert: he });
                                },
                            },
                            {
                                key: "updateRoute",
                                value: (function () {
                                    var e = Object(u.a)(
                                        c.a.mark(function e() {
                                            var t = this;
                                            return c.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                this.route.reverse(),
                                                                    T(
                                                                        this
                                                                            .route,
                                                                        (function () {
                                                                            var e = Object(
                                                                                u.a
                                                                            )(
                                                                                c.a.mark(
                                                                                    function e(
                                                                                        a
                                                                                    ) {
                                                                                        return c.a.wrap(
                                                                                            function (
                                                                                                e
                                                                                            ) {
                                                                                                for (;;)
                                                                                                    switch (
                                                                                                        (e.prev =
                                                                                                            e.next)
                                                                                                    ) {
                                                                                                        case 0:
                                                                                                            if (
                                                                                                                t
                                                                                                                    .state
                                                                                                                    .visualizationState !==
                                                                                                                ce
                                                                                                            ) {
                                                                                                                e.next = 3;
                                                                                                                break;
                                                                                                            }
                                                                                                            return (
                                                                                                                (e.next = 3),
                                                                                                                F(
                                                                                                                    Math.abs(
                                                                                                                        t
                                                                                                                            .state
                                                                                                                            .visualizationSpeed -
                                                                                                                            110
                                                                                                                    )
                                                                                                                )
                                                                                                            );
                                                                                                        case 3:
                                                                                                            (t.grid[
                                                                                                                a.y
                                                                                                            ][
                                                                                                                a.x
                                                                                                            ].type = oe),
                                                                                                                D(
                                                                                                                    Z[
                                                                                                                        oe
                                                                                                                    ],
                                                                                                                    t
                                                                                                                        .grid[
                                                                                                                        a
                                                                                                                            .y
                                                                                                                    ][
                                                                                                                        a
                                                                                                                            .x
                                                                                                                    ]
                                                                                                                        .ref
                                                                                                                );
                                                                                                        case 5:
                                                                                                        case "end":
                                                                                                            return e.stop();
                                                                                                    }
                                                                                            },
                                                                                            e
                                                                                        );
                                                                                    }
                                                                                )
                                                                            );
                                                                            return function (
                                                                                t
                                                                            ) {
                                                                                return e.apply(
                                                                                    this,
                                                                                    arguments
                                                                                );
                                                                            };
                                                                        })()
                                                                    ).then(
                                                                        function () {
                                                                            t.setState(
                                                                                {
                                                                                    visualizationState: ue,
                                                                                }
                                                                            );
                                                                        }
                                                                    );
                                                            case 2:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "drawOnGrid",
                                value: function (e, t) {
                                    var a = this,
                                        n =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2]
                                                ? arguments[2]
                                                : this.state.item,
                                        i = function (e) {
                                            var t = e.x,
                                                n = e.y;
                                            (a.grid[n][t].type = ae),
                                                D(Z[ae], a.grid[n][t].ref);
                                        };
                                    this.end &&
                                    this.end.x === e &&
                                    this.end.y === t
                                        ? (i(this.end), (this.end = null))
                                        : this.start &&
                                          this.start.x === e &&
                                          this.start.y === t &&
                                          (i(this.start), (this.start = null)),
                                        n === ie
                                            ? (this.start && i(this.start),
                                              (this.start = { x: e, y: t }))
                                            : n === re &&
                                              (this.end && i(this.end),
                                              (this.end = { x: e, y: t })),
                                        (this.grid[t][e].type = n),
                                        D(Z[n], this.grid[t][e].ref);
                                },
                            },
                            {
                                key: "generateMazeSimple",
                                value: function () {
                                    var e = this;
                                    this.clearVisualization(),
                                        this.grid.forEach(function (e) {
                                            e.forEach(function (e) {
                                                e.type = ne;
                                            });
                                        });
                                    for (
                                        var t = [this.grid[1][1]],
                                            a = function () {
                                                var a = Math.floor(
                                                        Math.random() * t.length
                                                    ),
                                                    n = t[a];
                                                (function (t) {
                                                    var a = 0;
                                                    return (
                                                        !!t &&
                                                        (me.forEach(function (
                                                            n
                                                        ) {
                                                            var i = t.x + n[0],
                                                                r = t.y + n[1];
                                                            e.grid[r] &&
                                                                e.grid[r][i] &&
                                                                e.grid[r][i]
                                                                    .type ===
                                                                    ae &&
                                                                (a += 1);
                                                        }),
                                                        a <= 1)
                                                    );
                                                })(n) &&
                                                    ((n.type = ae),
                                                    me.forEach(function (a) {
                                                        var i = n.x + a[0],
                                                            r = n.y + a[1];
                                                        e.grid[r] &&
                                                            e.grid[r][i] &&
                                                            t.push(
                                                                e.grid[r][i]
                                                            );
                                                    })),
                                                    t.splice(a, 1);
                                            };
                                        t.length;

                                    )
                                        a();
                                    this.grid.forEach(function (t) {
                                        t.forEach(function (t) {
                                            e.drawOnGrid(t.x, t.y, t.type);
                                        });
                                    });
                                },
                            },
                            {
                                key: "findPath",
                                value: (function () {
                                    var e = Object(u.a)(
                                        c.a.mark(function e(t, a, n) {
                                            var i,
                                                r,
                                                l,
                                                s,
                                                u,
                                                d,
                                                m,
                                                p = this;
                                            return c.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                (i = !1),
                                                                    (l = function (
                                                                        e,
                                                                        t
                                                                    ) {
                                                                        return e.gScore >
                                                                            t.gScore
                                                                            ? 1
                                                                            : -1;
                                                                    }),
                                                                    (s = []).push(
                                                                        new (r = function e(
                                                                            t,
                                                                            a,
                                                                            n,
                                                                            i
                                                                        ) {
                                                                            Object(
                                                                                h.a
                                                                            )(
                                                                                this,
                                                                                e
                                                                            ),
                                                                                (this.x = t),
                                                                                (this.y = a),
                                                                                (this.distance = n),
                                                                                (this.gScore = i);
                                                                        })(
                                                                            t.x,
                                                                            t.y,
                                                                            0,
                                                                            0
                                                                        )
                                                                    ),
                                                                    (u = Object(
                                                                        o.a
                                                                    )(
                                                                        {},
                                                                        t.x +
                                                                            ":" +
                                                                            t.y,
                                                                        null
                                                                    )),
                                                                    (d = this
                                                                        .grid),
                                                                    (m = c.a.mark(
                                                                        function e() {
                                                                            var o,
                                                                                h;
                                                                            return c.a.wrap(
                                                                                function (
                                                                                    e
                                                                                ) {
                                                                                    for (;;)
                                                                                        switch (
                                                                                            (e.prev =
                                                                                                e.next)
                                                                                        ) {
                                                                                            case 0:
                                                                                                if (
                                                                                                    (o = s.shift())
                                                                                                        .x !==
                                                                                                        a.x ||
                                                                                                    o.y !==
                                                                                                        a.y
                                                                                                ) {
                                                                                                    e.next = 4;
                                                                                                    break;
                                                                                                }
                                                                                                return (
                                                                                                    (i = !0),
                                                                                                    e.abrupt(
                                                                                                        "return",
                                                                                                        "break"
                                                                                                    )
                                                                                                );
                                                                                            case 4:
                                                                                                if (
                                                                                                    (me.forEach(
                                                                                                        function (
                                                                                                            e
                                                                                                        ) {
                                                                                                            var i =
                                                                                                                    o.x +
                                                                                                                    e[0],
                                                                                                                l =
                                                                                                                    o.y +
                                                                                                                    e[1];
                                                                                                            if (
                                                                                                                d[
                                                                                                                    l
                                                                                                                ] &&
                                                                                                                d[
                                                                                                                    l
                                                                                                                ][
                                                                                                                    i
                                                                                                                ]
                                                                                                            ) {
                                                                                                                var c =
                                                                                                                    d[
                                                                                                                        l
                                                                                                                    ][
                                                                                                                        i
                                                                                                                    ];
                                                                                                                if (
                                                                                                                    c.type !==
                                                                                                                        ne &&
                                                                                                                    (c.x !==
                                                                                                                        t.x ||
                                                                                                                        c.y !==
                                                                                                                            t.y)
                                                                                                                ) {
                                                                                                                    u[
                                                                                                                        i +
                                                                                                                            ":" +
                                                                                                                            l
                                                                                                                    ] ||
                                                                                                                        (u[
                                                                                                                            i +
                                                                                                                                ":" +
                                                                                                                                l
                                                                                                                        ] = {
                                                                                                                            x:
                                                                                                                                o.x,
                                                                                                                            y:
                                                                                                                                o.y,
                                                                                                                            d: 9999,
                                                                                                                        });
                                                                                                                    var h =
                                                                                                                        o.distance +
                                                                                                                        1;
                                                                                                                    n ===
                                                                                                                        te &&
                                                                                                                        (h = 0);
                                                                                                                    var m =
                                                                                                                        h +
                                                                                                                        (1 +
                                                                                                                            1e-10) *
                                                                                                                            (Math.abs(
                                                                                                                                a.x -
                                                                                                                                    i
                                                                                                                            ) +
                                                                                                                                Math.abs(
                                                                                                                                    a.y -
                                                                                                                                        l
                                                                                                                                ));
                                                                                                                    h <
                                                                                                                        u[
                                                                                                                            i +
                                                                                                                                ":" +
                                                                                                                                l
                                                                                                                        ]
                                                                                                                            .d &&
                                                                                                                        ((u[
                                                                                                                            i +
                                                                                                                                ":" +
                                                                                                                                l
                                                                                                                        ] = {
                                                                                                                            x:
                                                                                                                                o.x,
                                                                                                                            y:
                                                                                                                                o.y,
                                                                                                                            d: h,
                                                                                                                        }),
                                                                                                                        n !==
                                                                                                                        ee
                                                                                                                            ? s.push(
                                                                                                                                  new r(
                                                                                                                                      i,
                                                                                                                                      l,
                                                                                                                                      h,
                                                                                                                                      m
                                                                                                                                  )
                                                                                                                              )
                                                                                                                            : s.unshift(
                                                                                                                                  new r(
                                                                                                                                      i,
                                                                                                                                      l,
                                                                                                                                      h,
                                                                                                                                      m
                                                                                                                                  )
                                                                                                                              ));
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    ),
                                                                                                    (h =
                                                                                                        d[
                                                                                                            o
                                                                                                                .y
                                                                                                        ][
                                                                                                            o
                                                                                                                .x
                                                                                                        ])
                                                                                                        .type ===
                                                                                                        ie ||
                                                                                                        h.type ===
                                                                                                            le)
                                                                                                ) {
                                                                                                    e.next = 15;
                                                                                                    break;
                                                                                                }
                                                                                                if (
                                                                                                    ((h.type = le),
                                                                                                    p
                                                                                                        .state
                                                                                                        .visualizationState !==
                                                                                                        ce)
                                                                                                ) {
                                                                                                    e.next = 14;
                                                                                                    break;
                                                                                                }
                                                                                                return (
                                                                                                    (e.next = 11),
                                                                                                    F(
                                                                                                        Math.abs(
                                                                                                            p
                                                                                                                .state
                                                                                                                .visualizationSpeed -
                                                                                                                110
                                                                                                        )
                                                                                                    )
                                                                                                );
                                                                                            case 11:
                                                                                                D(
                                                                                                    Z[
                                                                                                        le
                                                                                                    ],
                                                                                                    h.ref,
                                                                                                    function (
                                                                                                        e
                                                                                                    ) {
                                                                                                        F(
                                                                                                            400
                                                                                                        ).then(
                                                                                                            function () {
                                                                                                                e.current.style.transform =
                                                                                                                    "scale(1.0)";
                                                                                                            }
                                                                                                        );
                                                                                                    }
                                                                                                ),
                                                                                                    (e.next = 15);
                                                                                                break;
                                                                                            case 14:
                                                                                                D(
                                                                                                    Z[6],
                                                                                                    h.ref
                                                                                                );
                                                                                            case 15:
                                                                                                (n !==
                                                                                                    $ &&
                                                                                                    n !==
                                                                                                        te) ||
                                                                                                    s.sort(
                                                                                                        l
                                                                                                    );
                                                                                            case 16:
                                                                                            case "end":
                                                                                                return e.stop();
                                                                                        }
                                                                                },
                                                                                e
                                                                            );
                                                                        }
                                                                    ));
                                                            case 8:
                                                                if (!s.length) {
                                                                    e.next = 15;
                                                                    break;
                                                                }
                                                                return e.delegateYield(
                                                                    m(),
                                                                    "t0",
                                                                    10
                                                                );
                                                            case 10:
                                                                if (
                                                                    "break" !==
                                                                    e.t0
                                                                ) {
                                                                    e.next = 13;
                                                                    break;
                                                                }
                                                                return e.abrupt(
                                                                    "break",
                                                                    15
                                                                );
                                                            case 13:
                                                                e.next = 8;
                                                                break;
                                                            case 15:
                                                                if (
                                                                    (i &&
                                                                        this.setRoute(
                                                                            u,
                                                                            a
                                                                        ),
                                                                    this.state
                                                                        .visualizationState !==
                                                                        ce)
                                                                ) {
                                                                    e.next = 19;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 19),
                                                                    F(100)
                                                                );
                                                            case 19:
                                                                this.updateRoute();
                                                            case 20:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t, a, n) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "clearVisualization",
                                value: function () {
                                    var e = this,
                                        t =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0] &&
                                            arguments[0];
                                    (this.route = []),
                                        this.setState(function () {
                                            return (
                                                e.grid.map(function (a) {
                                                    return (a = a.map(function (
                                                        a
                                                    ) {
                                                        return (
                                                            e.start &&
                                                            a.x === e.start.x &&
                                                            a.y === e.start.y
                                                                ? (a.type = ie)
                                                                : e.end &&
                                                                  a.x ===
                                                                      e.end.x &&
                                                                  a.y ===
                                                                      e.end.y
                                                                ? (a.type = re)
                                                                : (t ||
                                                                      a.type ===
                                                                          le ||
                                                                      a.type ===
                                                                          oe) &&
                                                                  (D(
                                                                      Z[ae],
                                                                      a.ref
                                                                  ),
                                                                  (a.type = ae)),
                                                            a
                                                        );
                                                    }));
                                                }),
                                                { visualizationState: se }
                                            );
                                        }),
                                        t &&
                                            ((this.start = null),
                                            (this.end = null));
                                },
                            },
                            {
                                key: "setRoute",
                                value: function (e, t) {
                                    this.route.push({ x: t.x, y: t.y });
                                    for (
                                        var a = t.x + ":" + t.y;
                                        null !== e[a];

                                    )
                                        this.route.push(e[a]),
                                            (a = e[a].x + ":" + e[a].y);
                                    this.route.shift(), this.route.pop();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                            J,
                                            null,
                                            i.a.createElement(xe, {
                                                active:
                                                    this.state
                                                        .visualizationState ===
                                                    ue,
                                                isAlert: !this.route.length,
                                                text: this.route.length
                                                    ? "Found path of length ".concat(
                                                          this.route.length,
                                                          "."
                                                      )
                                                    : "Path not found!",
                                            }),
                                            i.a.createElement(ge, {
                                                changeSelectedAlgorithm: this
                                                    .changeAlgorithm,
                                                onClick: this.onRunButtonClick,
                                                onMazeClick: this
                                                    .generateMazeSimple,
                                                onResetClick: this
                                                    .clearVisualization,
                                                visualizationState: this.state
                                                    .visualizationState,
                                                changeVisSpeed: this
                                                    .changeVisSpeed,
                                                visualizationSpeed: this.state
                                                    .visualizationSpeed,
                                                activeAlert: this.state
                                                    .activeAlert,
                                            })
                                        ),
                                        i.a.createElement(
                                            "span",
                                            {
                                                style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    topMargin: "100",
                                                    position: "fixed",
                                                    padding: "0px 0px",
                                                },
                                            },
                                            i.a.createElement(Se, {
                                                changeSelectedItem: this
                                                    .changeItem,
                                                selectedItem: this.state.item,
                                                hidden:
                                                    this.state
                                                        .visualizationState !==
                                                    se,
                                                activeAlert: this.state
                                                    .activeAlert,
                                                removeAlert: this.removeAlert,
                                            }),
                                            i.a.createElement(ve, {
                                                updateCell: this.drawOnGrid,
                                                selectedItem: this.state.item,
                                                grid: this.grid,
                                                disableDrawing:
                                                    this.state
                                                        .visualizationState !==
                                                    se,
                                            })
                                        )
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(i.a.Component);
            l.a.render(
                i.a.createElement(ke, null),
                document.getElementById("root")
            );
        },
    },
    [[38, 1, 2]],
]);
//# sourceMappingURL=main.dd591add.chunk.js.map
