let fetchedData = []
let profileDropdown = document.getElementsByClassName('profile_dropdown')
let profile = document.getElementsByClassName('profile')

function fetchData() {
	fetch(
		'https://script.google.com/a/qrusible.com/macros/s/AKfycbzwcXVfU8TPrVK8eNoR8hjIn956TjpEI4QDGvIOeW9ZCBc_eYV6L6ZgMfLgXTJAzdro9w/exec'
	)
		.then((response) => response.json())
		.then((responseData) => {
			fetchedData = responseData
			dropDown()
			multipleProfiles()
		})
		.catch((error) => {
			console.error(error)
		})
}

function dropDown() {
	for (var i = 0; i < profileDropdown.length; i++) {
		profileDropdown[i].addEventListener('click', function () {
			this.classList.toggle('active')
			var content = this.nextElementSibling
			if (content.style.maxHeight) {
				content.style.maxHeight = null
			} else {
				content.style.maxHeight = content.scrollHeight + 100 + 'px'
			}
		})
	}
}

function multipleProfiles() {
	for (let i = 1; i < fetchedData.length; i++) {
		let text = fetchedData[i][3]

		let paragraphs = text.split('\n')

		let wrappedParagraphs = paragraphs.map(function (paragraph) {
			return '<p>' + paragraph + '</p>'
		})

		let wrappedText = wrappedParagraphs.join('')

		let container = document.createElement('div')
		container.textContent = wrappedText
		let newProfile = profile[0].cloneNode(true)

		newProfile.querySelector('.profile_name').innerHTML = `${i + 1}. ${
			fetchedData[i][0]
		} `
		newProfile.querySelector('.profile_content').innerHTML = `
        <div class="v1 box"><h2>V1</h2>


                            {
                            
                            "id": {
                            "S": ""
                            },

                            "createdAt": {
                            "S": ""
                            },

                            "description": {
                            "S": ""
                            },

                            "Email": {
                            "S": ""
                            },

                            "imagelink": {
                            "S": ""
                            },

                            "impact": {
                            "S": "${fetchedData[i][5]}"
                            },

                            "impactOverall": {
                            "S": ""
                            },

                            "likes": {
                            "S": "0"
                            },

                            "name": {
                            "S": "${fetchedData[i][0]}"
                            },

                            "outcome": {
                            "S": ""
                            },

                            "profileId": {
                            "S": ""
                            },

                            "summary": {
                            "S": "${fetchedData[i][4]}"
                            },

                            "tag1": {
                            "S": ""
                            },

                            "tag2": {
                            "S": ""
                            },

                            "title": {
                            "S": "${fetchedData[i][6]}"
                            },

                            "updatedAt": {
                            "S": ""
                            },

                            "UserId": {
                            "S": ""
                            },

                            "views": {
                            "S": "0"
                            },

                            "__typename": {
                            "S": "Newhidi"
                            }

                            }

                        </div>
                        <div class="v2 box"><h2>V2</h2>
                            {
                            "id": {
                            "S": ""
                            },
                            "createdAt": {
                            "S": ""
                            },
                            "htmlheading": {
                            "S": "${fetchedData[i][6]}"
                            },
                            "htmlsummary": {
                            "S": "${container.innerHTML}"
                            },
                            "owner": {
                            "S": ""
                            },
                            "profileId": {
                            "S": ""
                            },
                            "summary": {
                            "S": "${fetchedData[i][4]}"
                            },
                            "updatedAt": {
                            "S": ""
                            },
                            "UserId": {
                            "S": ""
                            },
                            "__typename": {
                            "S": "Newhidi"
                            }
                            }
                        </div>
        `
		// add any other properties you want to display

		profile[0].parentNode.appendChild(newProfile)

		let dropdown = newProfile.querySelector('.profile_dropdown')
		dropdown.addEventListener('click', function () {
			this.classList.toggle('active')
			var content = this.nextElementSibling
			if (content.style.maxHeight) {
				content.style.maxHeight = null
			} else {
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	}
}

document.addEventListener('DOMContentLoaded', function () {
	fetchData()
})
