const parse = (key) => {
	return key.replace("$", " ");

}
const getError = (error_msg, callback) => {
	var jsonRes = {
		"payload": {
			"google": {
				"expectUserResponse": true,
				"richResponse": {
					"items": [
						{
							"simpleResponse": {
								"textToSpeech": error_msg
							}
						}
					]
				}
			}
		}
	}
	callback(jsonRes);
}

const getTable = (Item, type, simpleResponse, callback) => {
	
	var rows = [];
	var i = 0;
	for (var key in Item) {
		if (Item[key] != null) {
			var cellsArr = [];
			var cells = {};
			var text1 = { "text": parse(key) };
			var text2 = { "text": Item[key] };
			cellsArr[0] = text1;
			cellsArr[1] = text2;
			cells.cells = cellsArr;
			cells.dividerAfter = true;
			rows[i] = cells;
			i++;
		}
	}
	var jsonRes = {
		"payload": {
			"google": {
				"expectUserResponse": true,
				"richResponse": {
					"items": [
						{
							"simpleResponse": {
								"textToSpeech": simpleResponse
							}
						},
						{
							"tableCard": {
								"title": `${item.name} details`,
								"subtitle": `${item.type}`,
								"image": {
									"url": `https://cdn.warframestat.us/img/${item.imageName}`,
									"accessibilityText": "Actions on Google"
								},
								"rows": rows,
								"buttons": [
									{
										"title": "Wiki",
										"openUrlAction": {
											"url": item.wikiaUrl

										}
									}
								]

							}

						}
					],
					// "suggestions":[
					//         {
					//             "title": "Yes"
					//         },
					//         {
					//             "title": "No"
					//         }
					//   ]

				}
			},
			"userStorage": "{\"data\":{}}"
		}
	};
	callback(jsonRes);


}

exports.getTable = getTable;