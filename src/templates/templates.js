class List {
    constructor() {
        this.payload = {
            template_type: "list",
            top_element_style: "COMPACT",
            elements: []
        };
    }
}

class ListElement {
    constructor(title, subtitle, imgURL) {
        this.title = title;
        this.subtitle = subtitle;
        this.image_url = imgURL;
        this.buttons = [];
        
    }
};

// const testResponse = {
//     payload: {
//         facebook: recommendations
//     }
// }

// "payload": {
//     "template_type": "list",
//     "top_element_style": "<LARGE | COMPACT>",
//     "elements": [
//       {
//         "title": "<TITLE_TEXT>",
//         "subtitle": "<SUBTITLE_TEXT>",
//         "image_url": "<IMAGE_URL_FOR_THUMBNAIL>",          
//         "buttons": [<BUTTON_OBJECT>],
//         "default_action": {
//           "type": "web_url",
//           "url": "<URL_TO_OPEN_WHEN_ITEM_IS_TAPPED>",
//           "messenger_extensions": <TRUE | FALSE>,
//           "webview_height_ratio": "<COMPACT | TALL | FULL>"
//         }
//       },
//       ...
//     ],
//      "buttons": [<BUTTON_OBJECT>]  
//   