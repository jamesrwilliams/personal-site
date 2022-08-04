const formatDate = (dateString: string, preset: string = 'full') => {
  const presets: { [index: string]: object; } = {
    full: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    },
    numeric: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timeZone: 'UTC'
    },
  };

  const validPresetProvided = Object.prototype.hasOwnProperty.call(presets, preset);
  const options = validPresetProvided ? presets[preset] : presets.full;

  return new Date(dateString).toLocaleDateString('en-CA', options);
};

export default formatDate;
