import { convert } from "html-to-text";

export const convertToPlainText = (quillContent) => {
  const options = {
    wordwrap: 20,
  };
  return convert(quillContent, options);
};

export function validMessage(input) {
  // Check if the input is null, undefined, or an empty string
  if (!input || input.length === 0) return false;

  // Replace HTML tags with an empty string
  const withoutTags = input.replace(/<\/?[^>]+(>|$)/g, '');

  // Replace white spaces with an empty string
  const withoutWhiteSpaces = withoutTags.replace(/\s+/g, '');

  // Replace non-breaking spaces with an empty string
  const withoutSpaces = withoutWhiteSpaces.replace(/\&nbsp;/g, '');

  // Check if the resulting string has a length greater than 0
  const hasContent = withoutSpaces.length > 0;

  return hasContent;
}