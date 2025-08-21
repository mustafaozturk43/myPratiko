<template>
  <div>
    <!-- İstatistik Kartları -->
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card class="rounded-lg">
          <v-card-text>
            <div class="d-flex align-center mb-2">
              <div class="bg-[#B9F6CA] rounded-lg p-2 mr-4">
                <v-icon color="green-darken-2">mdi-account-group</v-icon>
              </div>
              <div class="flex-grow-1">
                <div class="text-subtitle-2 text-medium-emphasis">
                  Toplam Müşteri
                </div>
                <div class="text-h5">{{ totalCustomers }}</div>
              </div>
              <div class="text-success text-caption">
                <v-icon size="small">mdi-arrow-up</v-icon>
                12%
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="rounded-lg">
          <v-card-text>
            <div class="d-flex align-center mb-2">
              <div class="bg-[#E1BEE7] rounded-lg p-2 mr-4">
                <v-icon color="purple-darken-2">mdi-account-check</v-icon>
              </div>
              <div class="flex-grow-1">
                <div class="text-subtitle-2 text-medium-emphasis">
                  Aktif Müşteriler
                </div>
                <div class="text-h5">{{ activeCustomers }}</div>
              </div>
              <div class="text-success text-caption">
                <v-icon size="small">mdi-arrow-up</v-icon>
                8%
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="rounded-lg">
          <v-card-text>
            <div class="d-flex align-center mb-2">
              <div class="bg-[#BBDEFB] rounded-lg p-2 mr-4">
                <v-icon color="blue-darken-2">mdi-account-plus</v-icon>
              </div>
              <div class="flex-grow-1">
                <div class="text-subtitle-2 text-medium-emphasis">
                  Yeni Müşteriler
                </div>
                <div class="text-h5">{{ newCustomers }}</div>
              </div>
              <div class="text-success text-caption">
                <v-icon size="small">mdi-arrow-up</v-icon>
                24%
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="rounded-lg">
          <v-card-text>
            <div class="d-flex align-center mb-2">
              <div class="bg-[#FFE0B2] rounded-lg p-2 mr-4">
                <v-icon color="orange-darken-2">mdi-currency-usd</v-icon>
              </div>
              <div class="flex-grow-1">
                <div class="text-subtitle-2 text-medium-emphasis">
                  Aylık Gelir
                </div>
                <div class="text-h5">{{ monthlyRevenue }}₺</div>
              </div>
              <div class="text-error text-caption">
                <v-icon size="small">mdi-arrow-down</v-icon>
                3%
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Son Eklenen Müşteriler Listesi -->
    <v-card class="mt-6 rounded-lg">
      <v-card-title class="text-h6 font-weight-regular pa-6">
        Son Eklenen Müşteriler
      </v-card-title>

      <v-card-text class="pa-0">
        <v-table>
          <thead>
            <tr>
              <th
                class="text-left text-subtitle-2 text-medium-emphasis font-weight-regular"
              >
                Müşteri
              </th>
              <th
                class="text-left text-subtitle-2 text-medium-emphasis font-weight-regular"
              >
                E-posta
              </th>
              <th
                class="text-left text-subtitle-2 text-medium-emphasis font-weight-regular"
              >
                Telefon
              </th>
              <th
                class="text-left text-subtitle-2 text-medium-emphasis font-weight-regular"
              >
                Kayıt Tarihi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="customer in recentCustomers"
              :key="customer.id"
              class="hover:bg-gray-50"
            >
              <td>{{ customer.firstName }} {{ customer.lastName }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.phone }}</td>
              <td>{{ formatDate(customer.createdAt) }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>

    <!-- Yeni Müşteri Ekle FAB -->
    <v-btn
      class="fab-button"
      color="primary"
      icon="mdi-plus"
      size="large"
      @click="dialog = true"
    />

    <!-- Yeni Müşteri Modal -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card class="rounded-lg">
        <v-card-title class="text-h6 font-weight-regular pa-6">
          Yeni Müşteri Kaydı
        </v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="isFormValid">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="newCustomer.firstName"
                  density="comfortable"
                  label="Ad"
                  required
                  :rules="[(v) => !!v || 'Ad zorunludur']"
                  variant="outlined"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="newCustomer.lastName"
                  density="comfortable"
                  label="Soyad"
                  required
                  :rules="[(v) => !!v || 'Soyad zorunludur']"
                  variant="outlined"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="newCustomer.email"
                  density="comfortable"
                  label="E-posta"
                  required
                  :rules="emailRules"
                  variant="outlined"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="newCustomer.phone"
                  density="comfortable"
                  label="Telefon"
                  variant="outlined"
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="newCustomer.address"
                  density="comfortable"
                  label="Adres"
                  rows="3"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-6">
          <v-spacer />
          <v-btn class="mr-2" variant="tonal" @click="dialog = false">
            İptal
          </v-btn>
          <v-btn
            :disabled="!isFormValid"
            :loading="loading"
            color="primary"
            @click="save"
          >
            Kaydet
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Bildirim -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      location="top end"
      :timeout="3000"
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Form ve Dialog durumları
const dialog = ref(false);
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("");
const loading = ref(false);
interface VForm extends HTMLFormElement {
  validate: () => boolean;
}

const form = ref<VForm | null>(null);
const isFormValid = ref(false);

// İstatistikler
const totalCustomers = ref(156);
const activeCustomers = ref(134);
const newCustomers = ref(28);
const monthlyRevenue = ref("45,280");

// Form validasyon kuralları
const emailRules = [
  (v: string) => !!v || "E-posta zorunludur",
  (v: string) => /.+@.+\..+/.test(v) || "Geçerli bir e-posta adresi giriniz",
];

// Yeni müşteri formu
const newCustomer = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
});

// Son eklenen müşteriler
const recentCustomers = ref([
  {
    id: 1,
    firstName: "Ahmet",
    lastName: "Yılmaz",
    email: "ahmet.yilmaz@email.com",
    phone: "0532 123 4567",
    createdAt: "2025-08-15",
  },
  {
    id: 2,
    firstName: "Ayşe",
    lastName: "Kaya",
    email: "ayse.kaya@email.com",
    phone: "0533 234 5678",
    createdAt: "2025-08-14",
  },
  {
    id: 3,
    firstName: "Mehmet",
    lastName: "Demir",
    email: "mehmet.demir@email.com",
    phone: "0534 345 6789",
    createdAt: "2025-08-13",
  },
]);

// Tarih formatı
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Kaydetme işlemi
const save = async () => {
  if (!form.value?.validate()) return;

  loading.value = true;

  try {
    // API çağrısı burada yapılacak
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Başarılı kayıt
    snackbarText.value = "Müşteri başarıyla eklendi";
    snackbarColor.value = "success";
    dialog.value = false;

    // Form temizleme
    newCustomer.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    };

    // İstatistikleri güncelle
    totalCustomers.value++;
    activeCustomers.value++;
    newCustomers.value++;
  } catch (_error) {
    snackbarText.value = "Bir hata oluştu";
    snackbarColor.value = "error";
  } finally {
    loading.value = false;
    snackbar.value = true;
  }
};
</script>

<style scoped>
.fab-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
}

:deep(.v-card) {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1) !important;
}

:deep(.v-table) {
  background: transparent !important;
}

:deep(.v-table th) {
  border-bottom: 1px solid #e5e7eb !important;
  text-transform: none !important;
}

:deep(.v-table td) {
  border-bottom: 1px solid #f3f4f6 !important;
}
</style>
