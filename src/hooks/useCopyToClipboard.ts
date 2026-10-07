import { useCallback, useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

export function useCopyToClipboard(resetMs = 1800) {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = useCallback(
    (text: string) => {
      Clipboard.setString(text);
      setCopied(text);
      setTimeout(() => setCopied(null), resetMs);
    },
    [resetMs],
  );
  return { copied, copy };
}
