import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 5,
        "fontFamily": "'gibsonregular'"
    },
    "starter-template": {
        "paddingTop": 3,
        "paddingRight": 1.5,
        "paddingBottom": 3,
        "paddingLeft": 1.5,
        "textAlign": "center"
    },
    "navbar": {
        "WebkitBoxShadow": "0 5px 6px -6px #999",
        "MozBoxShadow": "0 5px 6px -6px #999",
        "boxShadow": "0 5px 6px -6px #999",
        "backgroundColor": "white"
    },
    "navbar-brand": {
        "textTransform": "uppercase",
        "fontWeight": "bold",
        "color": "#8252DA"
    },
    "navbar-brand:hover": {
        "color": "#8252DA"
    },
    "navbar-nav a": {
        "color": "#929292"
    },
    "navbar-nav a:hover": {
        "color": "#8252DA"
    },
    "navbar-nav a:active": {
        "color": "#8252DA"
    },
    "navbar-nav active": {
        "color": "#8252DA"
    },
    "btn-outline-purple": {
        "color": "#8252DA",
        "backgroundImage": "none",
        "backgroundColor": "transparent",
        "borderColor": "#8252DA"
    },
    "legday-phone": {
        "maxWidth": 300,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "buttonsbtn-demo": {
        "backgroundImage": "linear-gradient(to bottom right, #8252DA, #FF40FF)",
        "border": 0,
        "borderColor": "#8252DA",
        "color": "white"
    },
    "btn-demo:active": {
        "backgroundImage": "linear-gradient(to bottom right, #8252DA, #FF40FF) !important",
        "color": "white"
    },
    "btn-demo:hover": {
        "backgroundImage": "linear-gradient(to bottom right, #8252DA, #FF40FF) !important",
        "color": "white"
    },
    "btn-signup:active": {
        "color": "#8252DA"
    },
    "btn-signup:hover": {
        "color": "#8252DA"
    }
});