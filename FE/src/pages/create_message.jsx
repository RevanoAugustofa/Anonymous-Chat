import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreateMessage() {
  const [message, setMessage] = useState('');
  const [kodeUnik, setKodeUnik] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // Ambil kode_unik dari API user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // pastikan token disimpan saat login
          },
        });

        setKodeUnik(response.data.kode_unik);
      } catch (err) {
        console.error('Gagal ambil data user:', err);
        setError('Gagal mengambil data user.');
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async () => {
    if (!message.trim()) {
      alert('Pesan tidak boleh kosong!');
      return;
    }

    if (!kodeUnik) {
      setError('Kode unik belum tersedia.');
      return;
    }

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/prompts/${kodeUnik}`,
        { isi_pesan: message }
      );

      console.log('Berhasil:', response.data);

      setSuccess('Pesan berhasil dikirim!');
      setMessage('');
    } catch (err) {
      console.error('Error:', err);
      setError('Terjadi kesalahan saat mengirim.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create Message</h1>

      <textarea
        className="w-full p-2 border border-gray-300 rounded-md text-black mb-4"
        rows="5"
        placeholder="Tulis pesanmu di sini..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
      >
        {loading ? 'Mengirim...' : 'Kirim'}
      </button>

      {success && <p className="text-green-600 mt-2">{success}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

export default CreateMessage;
