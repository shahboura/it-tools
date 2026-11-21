<script setup lang="ts">
import { computedRefreshable } from '@/composable/computedRefreshable';
import { useCopy } from '@/composable/copy';
import { useQueryParam } from '@/composable/queryParams';
import { cookieSecretByteLengths, generateCookieSecret } from './cookie-secret-generator.service';

const { t } = useI18n();
const byteLength = useQueryParam({ name: 'bytes', defaultValue: 32 });

const byteLengthOptions = cookieSecretByteLengths.map(byteLength => ({
  label: `${byteLength} bytes (${byteLength * 8} bits)`,
  value: byteLength,
}));

const [secret, refreshSecret] = computedRefreshable(() => generateCookieSecret(byteLength.value));

const { copy } = useCopy({ source: secret, text: t('tools.cookie-secret-generator.copied') });
</script>

<template>
  <div>
    <c-card>
      <c-select
        v-model:value="byteLength"
        mb-4
        :label="t('tools.cookie-secret-generator.byteLength')"
        :options="byteLengthOptions"
      />

      <c-input-text
        v-model:value="secret"
        readonly
        monospace
        :placeholder="t('tools.cookie-secret-generator.secretPlaceholder')"
      />

      <div mt-5 flex justify-center gap-3>
        <c-button @click="copy()">
          {{ t('tools.cookie-secret-generator.button.copy') }}
        </c-button>
        <c-button @click="refreshSecret">
          {{ t('tools.cookie-secret-generator.button.refresh') }}
        </c-button>
      </div>

      <n-alert type="info" mt-5>
        {{ t('tools.cookie-secret-generator.note') }}
      </n-alert>
    </c-card>
  </div>
</template>
