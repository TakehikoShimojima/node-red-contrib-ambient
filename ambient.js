module.exports = function(RED) {
    var request = require('request');
    var hostname = 'http://54.65.206.59';

    function ambient(n) {
        RED.nodes.createNode(this,n);
        this.channelId = n.channelId;
        this.writeKey = n.writeKey;
        var node = this;

        this.on('input', function(msg) {
            var payload = msg.payload;
            payload.writeKey = node.writeKey;
            options = {
                url: hostname + '/api/v2/channels/' + node.channelId + '/data',
                headers: {'Content-Type': 'application/json'},
                body: payload,
                json: true
            };

            request.post(options, function(err, res, body) {
                if (err) {
                    node.error(err);
                    node.status({fill:"red", shape:"ring", text:"ambient send failed"});
                } else {
                    node.status({});
                }
            });
        });
    }
    RED.nodes.registerType("Ambient",ambient);
}
