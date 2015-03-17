require('./institution');

$data.EntityContext.extend("colleges", {
	"institutions": {type: $data.EntitySet, elementType: colleges.institution}
});

module.exports = exports = colleges;