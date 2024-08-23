export default function NotFound() {
    return (
        <div className="w-full px-32 py-32">
            <dl>
                <dt className="text-2xl text-center font-bold mb-6">
                    ページが見つかりませんでした
                </dt>
                <dd className="text-center">
                    あなたがアクセスしようとしたページは存在しません。
                    <br />
                    URLを再度ご確認ください。
                </dd>
            </dl>
        </div>
    );
}
