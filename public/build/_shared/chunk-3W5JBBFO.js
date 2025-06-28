import {
  createHotContext
} from "/build/_shared/chunk-P6OU7LJU.js";

// app/data/formTemplates.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\formTemplates.js"
  );
  import.meta.hot.lastModified = "1748797210382.5815";
}
var formTemplates = {
  contact: {
    id: "template-contact",
    title: "Contact Information",
    description: "Basic contact information form template",
    fields: [
      {
        id: "contact-name",
        title: "Full Name",
        type: "short-answer",
        required: true
      },
      {
        id: "contact-email",
        title: "Email Address",
        type: "short-answer",
        required: true,
        pattern: "^\\S+@\\S+\\.\\S+$"
      },
      {
        id: "contact-phone",
        title: "Phone Number",
        type: "short-answer",
        required: true,
        pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
      },
      {
        id: "contact-address",
        title: "Address",
        type: "paragraph",
        required: false
      },
      {
        id: "contact-preferred",
        title: "Preferred Contact Method",
        type: "radio",
        required: true,
        options: [
          { id: "contact-pref-1", text: "Email" },
          { id: "contact-pref-2", text: "Phone" },
          { id: "contact-pref-3", text: "Text Message" }
        ]
      }
    ]
  },
  rsvp: {
    id: "template-rsvp",
    title: "RSVP Form",
    description: "Event response and details collection form",
    fields: [
      {
        id: "rsvp-name",
        title: "Your Name",
        type: "short-answer",
        required: true
      },
      {
        id: "rsvp-email",
        title: "Email Address",
        type: "short-answer",
        required: true,
        pattern: "^\\S+@\\S+\\.\\S+$"
      },
      {
        id: "rsvp-attendance",
        title: "Will you be attending?",
        type: "radio",
        required: true,
        options: [
          { id: "rsvp-att-1", text: "Yes, I will attend" },
          { id: "rsvp-att-2", text: "No, I cannot attend" },
          { id: "rsvp-att-3", text: "Maybe" }
        ]
      },
      {
        id: "rsvp-guests",
        title: "Number of Additional Guests",
        type: "dropdown",
        required: true,
        options: [
          { id: "rsvp-guest-0", text: "0" },
          { id: "rsvp-guest-1", text: "1" },
          { id: "rsvp-guest-2", text: "2" },
          { id: "rsvp-guest-3", text: "3" },
          { id: "rsvp-guest-4", text: "4" }
        ]
      },
      {
        id: "rsvp-dietary",
        title: "Dietary Restrictions",
        type: "checkboxes",
        required: false,
        options: [
          { id: "rsvp-diet-1", text: "Vegetarian" },
          { id: "rsvp-diet-2", text: "Vegan" },
          { id: "rsvp-diet-3", text: "Gluten-free" },
          { id: "rsvp-diet-4", text: "Dairy-free" },
          { id: "rsvp-diet-5", text: "Nut allergy" }
        ]
      }
    ]
  },
  partyInvite: {
    id: "template-party",
    title: "Party Invitation Response",
    description: "Party planning and guest information collection",
    fields: [
      {
        id: "party-name",
        title: "Guest Name",
        type: "short-answer",
        required: true
      },
      {
        id: "party-email",
        title: "Email Address",
        type: "short-answer",
        required: true,
        pattern: "^\\S+@\\S+\\.\\S+$"
      },
      {
        id: "party-attendance",
        title: "Attendance Response",
        type: "radio",
        required: true,
        options: [
          { id: "party-att-1", text: "Count me in!" },
          { id: "party-att-2", text: "Sorry, can't make it" }
        ]
      },
      {
        id: "party-bringing",
        title: "What are you bringing?",
        type: "dropdown",
        required: true,
        options: [
          { id: "party-bring-1", text: "Appetizer" },
          { id: "party-bring-2", text: "Main Dish" },
          { id: "party-bring-3", text: "Dessert" },
          { id: "party-bring-4", text: "Beverages" },
          { id: "party-bring-5", text: "Nothing - I'll help in other ways!" }
        ]
      },
      {
        id: "party-activities",
        title: "Which activities interest you?",
        type: "checkboxes",
        required: false,
        options: [
          { id: "party-act-1", text: "Dancing" },
          { id: "party-act-2", text: "Party Games" },
          { id: "party-act-3", text: "Karaoke" },
          { id: "party-act-4", text: "Board Games" }
        ]
      },
      {
        id: "party-song",
        title: "Song Request",
        type: "short-answer",
        required: false
      }
    ]
  }
};

export {
  formTemplates
};
//# sourceMappingURL=/build/_shared/chunk-3W5JBBFO.js.map
