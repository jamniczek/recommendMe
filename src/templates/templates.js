const example = {
    "fulfillmentMessages": [
        {
            "platform": "FACEBOOK",
            "card": {
                "title": "Title: this is a title",
                "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                "buttons": [
                    {
                        "text": "This is a button",
                        "postback": "https://assistant.google.com/"
                    }
                ]
            }
        }
    ]
}

class Button {
    constructor(infoURL) {
        this.text = 'View more!';
        this.postback = infoURL;
    }
}

class Card {
    constructor(title, subtitle ,imageUri = 'http://sarigowns.com/wp-content/uploads/2017/04/pojo-placeholder-1024x768.png', infoURL) {
        this.platform = 'FACEBOOK'
        this.card = {
            title: title,
            subtitle: subtitle,
            imageUri: imageUri,
            buttons: [new Button(infoURL)]
        }
    }
}

module.exports = {
    Button,
    Card
}