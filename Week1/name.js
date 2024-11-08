exports.greet = function(first_name, last_name) {
    return `Hello ${first_name} ${last_name}!`;
}

exports.note = function(sender_name, message, recipient) {
    return `${recipient}, you got a new message from ${sender_name}: ${message}`;
}