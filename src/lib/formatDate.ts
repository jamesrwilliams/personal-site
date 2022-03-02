const formatDate = (dateString: string, preset: string = 'full') => {
  const presets = {
    full: {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    },
    numeric: {
      year: 'numeric', month: 'numeric', day: 'numeric',
    },
  };

  // @ts-ignore
  const options = (presets[preset] ?? presets.full);

  return new Date(dateString).toLocaleDateString('en-CA', options);
};

export default formatDate;
