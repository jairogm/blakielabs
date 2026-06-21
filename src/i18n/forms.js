// Runtime strings used by the client-side form logic in SiteScripts.astro.
// Kept separate from the page dictionaries so the client bundle stays tiny
// (it ships only these strings, not the whole marketing copy).
// Use {min} as a placeholder for the minimum-length count.
export const formMessages = {
  en: {
    valueMissing: {
      name: "Tell us your name.",
      company: "Add your company name.",
      email: "Add your email address.",
      brief: "Give us a little context first.",
      newsletterEmail: "Add your email address."
    },
    typeMismatch: {
      email: "Use a valid email address.",
      newsletterEmail: "Use a valid email address."
    },
    tooShort: {
      brief: "Give us at least 12 characters so we have something to work with."
    },
    requiredFallback: "This field is required.",
    invalidFallback: "Enter a valid value.",
    tooShortFallback: "Use at least {min} characters.",
    submitting: "Transmitting brief..."
  },
  es: {
    valueMissing: {
      name: "Dinos tu nombre.",
      company: "Agrega el nombre de tu empresa.",
      email: "Agrega tu correo electrónico.",
      brief: "Cuéntanos un poco de contexto primero.",
      newsletterEmail: "Agrega tu correo electrónico."
    },
    typeMismatch: {
      email: "Usa un correo electrónico válido.",
      newsletterEmail: "Usa un correo electrónico válido."
    },
    tooShort: {
      brief: "Danos al menos 12 caracteres para tener con qué trabajar."
    },
    requiredFallback: "Este campo es obligatorio.",
    invalidFallback: "Ingresa un valor válido.",
    tooShortFallback: "Usa al menos {min} caracteres.",
    submitting: "Transmitiendo brief..."
  }
};
