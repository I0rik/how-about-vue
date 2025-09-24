import { defineStore } from "pinia";

const ERRORS_MAP: LoginFormErrors = {
  email: "email is required",
  password: "The password must contain at least 8 characters",
};

export interface LoginFormErrors {
  email?: string;
  password?: string;
}

interface LoginFormState {
  email: string;
  password: string;
  isLoading: boolean;
  errors: LoginFormErrors;
}

export const useAuthStore = defineStore("auth", {
  state: (): LoginFormState => ({
    email: "",
    password: "",
    isLoading: false,
    errors: {},
  }),

  actions: {
    setEmail(newEmail: string) {
      this.email = newEmail;
      this.errors = {};
    },

    setPassword(password: string) {
      this.password = password;
      this.errors = {};
    },

    validateForm() {
      if (!this.email) {
        this.errors.email = ERRORS_MAP.email;
      } else {
        this.errors.email = undefined;
      }

      if (this.password.length < 8) {
        this.errors.password = ERRORS_MAP.password;
      } else {
        this.errors.password = undefined;
      }
    },

    async submitForm() {
      this.validateForm();
      if (!(this.isEmailValid && this.isPasswordValid)) {
        return;
      }

      this.isLoading = true;

      try {
        // api call mock
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (this.email === "test@example.com" && this.password === "password") {
          this.isLoading = false;
          return true;
        }

        return false;
      } catch (error) {
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    resetForm() {
      this.email = "";
      this.password = "";
      this.errors = {};
    },
  },

  getters: {
    isEmailValid: (state): Boolean => {
      return !state.errors.email;
    },

    isPasswordValid: (state) => {
      return !state.errors.password;
    },
  },
});
