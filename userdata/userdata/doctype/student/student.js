frappe.ui.form.on('Student', {
    refresh: function(frm) {
        frm.add_custom_button(('Create User'), function() {
            frappe.call({
                method: 'userdata.userdata.doctype.student.student.create_user_if_not_exists',
                args: {
                    name: frm.doc.name
                },
                callback: function(response) {
                    if (response.message) {
                        frappe.msgprint(response.message);
                    } else {
                        frappe.msgprint('Failed to create user.');
                    }
                }
            });
        });
    },

});
